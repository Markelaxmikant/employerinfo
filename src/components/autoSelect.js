import React, {useState, useRef, useEffect} from 'react';
import styles from "./autoSelect.module.scss";
import {Suggest} from "@blueprintjs/select";
import {ICONS} from "../../utils/iconNames";
import {Icons} from "../icons";
import {MenuItem, Tooltip} from "@blueprintjs/core";
import {useSelector} from "react-redux";
import _ from "lodash";

export const AutoSelect = (props) => {
    const {
        selectedValue, dataList, rightReadOnlyIcon, errorText, setErrorText=()=>{}, usePortal= true, queryFilterFlag = true,
        onItemSelected=()=>{}, editable, loading, tooltipPosition,onSelectQueryChange, onBlurEventHandle, needBlur=false, currentSelectedIndex,
        unValidText, loadData, popoverWidth,isDisabled=false, onArrowClick, height,autoFocus,showInputTextCenterAlign,showListOnFocus=false,placeHolderText='',
        isEnterKeyPressed=false,setIsEnterKeyPressed=()=>{}, onInputSubmit=()=>{}, valueKey, changeZIndex = 99999999, showNameWithCaption=false,
        scrollToActiveItem=true, activeItem = undefined, isTimePicker=false, key, disableSpaceKeySelection, isFromBroker=false,requiredErrorText="",
        keepMinWidth, tooltipText, changeSelectedItemOnActiveItemChange = false, readOnly = false,dropdownPosition='',
    } = props;

    const [errorLocalText, setErrorLocalText] = useState('');
    const [editOn, setEditOn] = useState(false);
    const [showItemsList, setShowItemsList] = useState(showListOnFocus);
    const [itemsList, setItemsList] = useState([]);
    const suggestBoxRef  = useRef(null);
    const [currentSelectedActiveItem, setCurrentSelectedActiveItem] = useState({});
    const [isActiveItemChanged, setIsActiveItemChanged] = useState(false);
    const {closeDropDownListForNow,isLoggedIn}  = useSelector((state) => state.dashboard);
    const {activeWorkbenchViewTabIndex} = useSelector((state) => state.systemManager);

    const popoverProps = {
        minimal: true, usePortal: usePortal,
        modifiers: {
            preventOverflow: { enabled: true }, flip: { enabled: true, boundariesElement: 'viewport' }
        },
        portalContainer: document.body
    }
    
    if (dropdownPosition) {
        popoverProps.position = dropdownPosition
    }

    useEffect(()=>{
        setItemsList(dataList);
    }, []);

    useEffect(()=>{
        if(closeDropDownListForNow === true){
            setShowItemsList(false)
        }
    },[closeDropDownListForNow]);


    useEffect(()=>{
        setItemsList(dataList);
    }, [dataList?.length]);

    const handleOnSelect = (item, e) => {
        if (e) {
            e.stopPropagation()
        }
        if (changeSelectedItemOnActiveItemChange) {            
            suggestBoxRef.current.state.isOpen = false;
        }
        const dropdownEle = document.querySelector('ul.bp3-menu')
        if (!dropdownEle && selectedValue) {
            // After pressing enter key when dropdown is not opened and some value is already there, it is selecting first element, so keeping same value
            item = selectedValue
        } 
        setEditOn(false);
        currentSelectedIndex !==undefined ? onItemSelected(item, e, currentSelectedIndex) : onItemSelected(item, e);
        setItemsList(dataList);
        if(isFromBroker){
            let clonedError = JSON.parse(JSON.stringify(errorText));
            if(activeWorkbenchViewTabIndex === null){
                clonedError["-1"] = "";
            }else{
                clonedError[activeWorkbenchViewTabIndex.toString()] = "";
            }
            setErrorText(clonedError);
        }else {
            setErrorText('');
        }
        setErrorLocalText('')
    };

    const onEdit = () => {
        if (loadData) {
            loadData();
        }
        setEditOn(true);
    };

    const onArrowDownClick = () => {
        //setErrorText('');
        onArrowClick && currentSelectedIndex ? onArrowClick(currentSelectedIndex) : onArrowClick && onArrowClick();
        setShowItemsList(true);
        setItemsList(dataList);
        suggestBoxRef.current?.inputElement.focus()
    };
    useEffect(()=>{
        suggestBoxRef.current.state.isOpen = false;
    },[isLoggedIn])
   
    const onQueryChange = (query, event) => {
        query = query.trim();
        if(query === ''){
            currentSelectedIndex !==undefined ? onItemSelected('', event, currentSelectedIndex) : onItemSelected('', event);
        }
        setShowItemsList(true);
        let filtered =  dataList.filter(data => (valueKey ? data[valueKey] : data.description ?? data.name ?? data.caption)?.toLowerCase()?.startsWith(query?.toLowerCase()));
        setItemsList(filtered);
        if(filtered?.length === 0) {
            if(isFromBroker){
                let clonedError = JSON.parse(JSON.stringify(errorText));
                if(activeWorkbenchViewTabIndex === null){
                    clonedError["-1"] = unValidText;
                }else{
                    clonedError[activeWorkbenchViewTabIndex.toString()] = unValidText;
                }
                setErrorText(clonedError);
            }else {
                if(requiredErrorText?.length) {
                    if(query.length){
                        setErrorText(unValidText);
                    }else {
                        setErrorText(requiredErrorText);
                    }
                }else{
                    setErrorText(unValidText);
                }
            }
            setErrorLocalText(unValidText);
        }else{
            if(isFromBroker){
                let clonedError = JSON.parse(JSON.stringify(errorText));
                if(activeWorkbenchViewTabIndex === null){
                    clonedError["-1"] = "";
                }else{
                    clonedError[activeWorkbenchViewTabIndex.toString()] = "";
                }
                setErrorText(clonedError);
            }else {
                setErrorText('');
            }
            setErrorLocalText('');
            let val = filtered[0].description ?? filtered[0].name ?? filtered[0].caption
            if (filtered.length === 1 && (val.toLowerCase()!=="" && query.toLowerCase()!=="") && val.toLowerCase() === query.toLowerCase()) {
                //TODO : following line was commented to solve Issue No. 1 in UTU-68 and 69, but now both are working fine after adding blank value condition in if block.
                handleOnSelect(filtered[0], null)
                suggestBoxRef.current.state.isOpen = false
            }
        }
    };

    const onSelectQuery=(query, event)=>{
        setShowItemsList(true);
        currentSelectedIndex !==undefined ? onSelectQueryChange(query, event, currentSelectedIndex) : onSelectQueryChange(query, event)
    };

    let dropdownWidth = document.getElementById('suggestBox')?.offsetWidth;

    if (!editable || editOn) {
        return (
            <div id={'suggestBox'} title={tooltipText && tooltipText} key={key} className={styles.suggestBox} style={{'--height': height, zIndex: changeZIndex}}>
                <Tooltip content={isFromBroker && activeWorkbenchViewTabIndex === null ? errorText["-1"] : isFromBroker && activeWorkbenchViewTabIndex !== null ?
                    errorText[activeWorkbenchViewTabIndex.toString()] : errorText ? errorText : errorLocalText} position={tooltipPosition ?? 'right'} className={styles.tooltip}
                         targetProps={{className: styles.tooltipTarget}} popoverClassName={styles.tooltipStyle}>
                    <Suggest ref={suggestBoxRef}
                             itemRenderer={(item, { modifiers, handleClick, index }) => (
                                 showItemsList ? <MenuItem id={index} tabIndex={0}
                                     style={{
                                         height:'20px',
                                         width: keepMinWidth ? 'auto' : popoverWidth === '100%'? (dropdownWidth - 5) +'px': popoverWidth,
                                         minWidth: keepMinWidth ? popoverWidth === '100%'? (dropdownWidth - 5) +'px': popoverWidth : 'auto',
                                         border: "1px solid transparent",
                                         minHeight:'24px',
                                         fontWeight: ((selectedValue && selectedValue.id && item.id === selectedValue.id) ||
                                             selectedValue && selectedValue.caption && item.caption === selectedValue.caption) ||
                                             (isTimePicker && item.name.includes("30"))? 'bold' : 'normal',
                                     }}
                                     className={styles.selectOption}
                                     active={modifiers.active}
                                     onClick={handleClick}
                                     text={showNameWithCaption && valueKey ? `${item[valueKey]} [${item.name}]` : valueKey ? item[valueKey] : item.value ?? item.caption ?? item.sortByName ?? item.envName ?? item.description ?? item.name ?? item.displayName ?? item.fieldName}
                                     //TODO : Edited by Amit (Quick Fix) ====> key should be something unique from the list, if list contains data with same name,description or caption then key is duplicating and hence the select box is highlighting the multiple options at the same time.
                                     key={valueKey && !item.id ? item[valueKey] : item.id ?? item.value ?? item.caption ?? item.sortByName ?? item.envName ?? item.description ?? item.name ?? item.displayName ?? item.fieldName}
                                 />:null
                             )}
                             onKeyUp={e => {
                                 if(e.keyCode === 40){
                                     setCurrentSelectedActiveItem(suggestBoxRef?.current?.queryList?.state?.activeItem)
                                 } else if (e.keyCode === 32 && !disableSpaceKeySelection) {
                                    suggestBoxRef.current?.handleItemSelect(suggestBoxRef?.current?.queryList?.state?.activeItem, e)
                                 }else if(e.keyCode === 38){
                                     setCurrentSelectedActiveItem(suggestBoxRef?.current?.queryList?.state?.activeItem)
                                 }else if(e.keyCode === 13){
                                     handleOnSelect(suggestBoxRef?.current?.queryList?.state?.activeItem);
                                     setIsEnterKeyPressed(!isEnterKeyPressed)
                                 }
                             }}
                             scrollToActiveItem={scrollToActiveItem}
                             activeItem={isActiveItemChanged ? undefined : activeItem }
                             onActiveItemChange={(e) => {
                                setIsActiveItemChanged(true)
                                if (changeSelectedItemOnActiveItemChange && e && e?.id !== selectedValue?.id && selectedValue && !_.isEmpty(currentSelectedActiveItem)) {
                                    onItemSelected(e)
                                }
                             }}
                             closeOnSelect={true}
                             resetOnQuery={!changeSelectedItemOnActiveItemChange}
                             items={itemsList ? itemsList : []}
                             itemsEqual={'id'}
                             small={true}
                             selectedItem={selectedValue}
                             onItemSelect={handleOnSelect}
                             onQueryChange={(query, event) => {
                                 if (event) {
                                     if (onSelectQueryChange) {
                                         onSelectQuery(query, event);
                                     }
                                     onQueryChange(query, event);
                                 }
                            }}
                             resetOnClose={false}
                             inputValueRenderer={(item) => {
                                 return valueKey ? item[valueKey] : item.value ?? item.caption ?? item.sortByName ?? item.envName ?? item.description ?? item.name ?? item.displayName ?? item.fieldName
                             }}
                             query={queryFilterFlag === true ? (selectedValue === null || selectedValue === undefined  ? '' : (valueKey ? selectedValue[valueKey] : selectedValue?.value ?? selectedValue?.caption ?? selectedValue?.sortByName ?? selectedValue?.envName ?? selectedValue?.description ?? selectedValue?.name ?? selectedValue?.displayName)) : ''}
                             inputProps={{
                                 onBlur:(e)=>{if(needBlur){ if(currentSelectedIndex != undefined){onBlurEventHandle(currentSelectedIndex,e)}else{onBlurEventHandle(e)}}},
                                 autoFocus: autoFocus||false,
                                 small: true,
                                 readOnly: readOnly,
                                 disabled: isDisabled,
                                 placeholder: placeHolderText,
                                 style: {height: height},
                                 rightElement:
                                     <div className={styles.arrowIconBox}>
                                         {
                                             loading ? <div className={styles.loadingGifStyle}/> :
                                                 ((isFromBroker && activeWorkbenchViewTabIndex === null ? errorText["-1"] :
                                                     isFromBroker && activeWorkbenchViewTabIndex !== null ? errorText[activeWorkbenchViewTabIndex.toString()] : errorText) || errorLocalText) ?
                                             <div className={styles.errorWrapper} onClick={!isDisabled && onArrowDownClick}>
                                                         <button className={styles.errorIcon}  onClick={!isDisabled && onArrowDownClick}/><Icons icon={ICONS.ARROWS_DOWN_DARK}/></div>
                                                 : <div className={isDisabled ? styles.arrowBoxDisabled :styles.arrowBox} onClick={!isDisabled && onArrowDownClick}><Icons icon={ICONS.ARROWS_DOWN_DARK}/></div>
                                         }

                                     </div>
                             }}
                             className={showInputTextCenterAlign?`${(errorText || errorLocalText) && styles.errorInputBox} ${styles.centeredInput}`:
                                 ((isFromBroker && activeWorkbenchViewTabIndex === null ? errorText["-1"] : isFromBroker && activeWorkbenchViewTabIndex !== null
                                     ? errorText[activeWorkbenchViewTabIndex.toString()] : errorText) || errorLocalText) && styles.errorInputBox}
                             fill={true}
                             popoverProps={popoverProps}
                             onKeyPressCapture={(e)=>e?.key === "Enter" && onInputSubmit()}
                    />
                </Tooltip>
            </div>
        )
    } else {
        let rightIcon = '';
        if (loading) {
            rightIcon = styles.loadingGifStyle;
        }
        return (
            <div className={styles.contentBox} onClick={() => onEdit()}>
                <div>{selectedValue ? selectedValue.name : ''}</div>
                {
                    rightIcon ? <div className={rightIcon}/>
                        :
                        <Icons icon={rightReadOnlyIcon}/>
                }

            </div>
        )
    }

};