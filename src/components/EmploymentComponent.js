import "./employment.css";
import { AutoSelect } from "../../../components/autoSelect";
import { ICONS } from "../../../../utils/iconNames";
import { useState } from "react";

export function EmploymentComponent(props) {
  const [isActiveEmployment, setIsActiveEmployment] = useState(false);

  return (
    <section className="app-container app-center">
      <div className="special-dialog-box">
        <div
          className="dialog-heading"
          onClick={() => setIsActiveEmployment(!isActiveEmployment)}
        >
          <div id="heading">Employment</div>
          <div>{isActiveEmployment ? "-" : "+"}</div>
        </div>
        {isActiveEmployment && (
          <div className="dialog-body">
            <fieldset>
              <legend>occupation Informaion</legend>
              <div className="dialog-container">
                <div className="option">occupation : </div>
                <div>
                  <input type="text" name="dialog-text" disabled />
                </div>

                <div className="option">Employment Basis : </div>
                <div>
                  <select type="text" name="dialog-text" disabled />
                </div>
                <div>
                            <AutoSelect
                                loadData={null}
                                loading={false}
                                popoverWidth={200 + 30 + 'px'}
                                errorText={''}
                                editable={false}
                                rightReadOnlyIcon={ICONS.HOME}
                                onItemSelected={() => { }}
                            />
                        </div>
              </div>
              <div className="dialog-container">
                <div className="option">occupation category : </div>
                <div>
                  <select type="text" name="dialog-text" disabled />
                </div>
                <div>

                            <AutoSelect
                                loadData={null}
                                loading={false}
                                popoverWidth={200 + 30 + 'px'}
                                errorText={''}
                                editable={false}
                                rightReadOnlyIcon={ICONS.HOME}
                                //dataList={OtherClientCategoryData}
                                onItemSelected={() => { }}
                            //selectedValue={OtherClientCategoryData[0] }

                            />
                        </div>
                <div className="option"> Employment type: </div>
                <div>
                  <select type="text" name="dialog-text" disabled />
                </div>
                <div>
                            <AutoSelect
                                loadData={null}
                                loading={false}
                                popoverWidth={200 + 30 + 'px'}
                                errorText={''}
                                editable={false}
                                rightReadOnlyIcon={ICONS.HOME}
                                onItemSelected={() => { }}
                            />

                        </div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="col-6">
                  <div className="dialog-container">
                    <div className="option">physical Requiremets :</div>
                    <div>
                      <select type="text" name="dialog-text" disabled />
                    </div>
                    <div className="col-7">

                                <AutoSelect
                                    loadData={null}
                                    loading={false}
                                    popoverWidth={200 + 30 + 'px'}
                                    errorText={''}
                                    editable={false}
                                    rightReadOnlyIcon={ICONS.HOME}
                                    //dataList={OtherClientCategoryData}
                                    onItemSelected={() => { }}
                                //selectedValue={OtherClientCategoryData[0] }

                                />
                            </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="dialog-container">
                    <div className="option"> Hours Worked : </div>
                    <div>
                      <input type="text" disabled />
                    </div>
                    <div className="option">per:</div>
                    <div>
                      <select type="text" name="dialog-text" disabled />
                    </div>
                    <div>
                                <AutoSelect
                                    loadData={null}
                                    loading={false}
                                    popoverWidth={200 + 30 + 'px'}
                                    errorText={''}
                                    editable={false}
                                    rightReadOnlyIcon={ICONS.HOME}
                                    onItemSelected={() => { }}
                                />
                            </div>
                  </div>
                </div>
              </div>

              <div className="col-6" style={{ marginLeft: "auto" }}>
                <div className="dialog-container">
                  <div className="option">Hours Fluctuate?:</div>
                  <div>
                    <select type="text" name="dialog-text" disabled />
                  </div>
                  <div>
                            
                            <AutoSelect
                                loadData={null}
                                loading={false}
                                popoverWidth={200 + 30 + 'px'}
                                errorText={''}
                                editable={false}
                                rightReadOnlyIcon={ICONS.HOME}
                                //dataList={OtherClientCategoryData}
                                onItemSelected={() => { }}
                            //selectedValue={OtherClientCategoryData[0] }

                            />

                        </div>
                </div>
              </div>
            </fieldset>
            <div className="dispflex">
              <fieldset className="flex1">
                <legend>Employment Date</legend>
                <div className="dialog-container">
                  <div className="option">Employer : </div>
                  <div>
                    <select type="text" name="dialog-text" disabled />
                  </div>
                  <div>
                    <div className="col-6">



                                    <AutoSelect
                                        loadData={null}
                                        loading={false}
                                        popoverWidth={200 + 30 + 'px'}
                                        errorText={''}
                                        editable={false}
                                        rightReadOnlyIcon={ICONS.HOME}
                                        //dataList={OtherClientCategoryData}
                                        onItemSelected={() => { }}
                                    //selectedValue={OtherClientCategoryData[0] }

                                    />
                                </div>
                  </div>
                </div>
                <div className="dialog-container">
                  <div className="option">GWL: </div>
                  <div>
                    <select type="text" name="dialog-text" disabled >
                    <option>2001-07-01</option>
                    </select>
                  </div>
                  <div>
                    <div className="col-6">


                                    <AutoSelect
                                        loadData={null}
                                        loading={false}
                                        popoverWidth={200 + 30 + 'px'}
                                        errorText={''}
                                        editable={false}
                                        rightReadOnlyIcon={ICONS.HOME}
                                        // dataList={OtherClientCategoryData}
                                        onItemSelected={() => { }}
                                    // selectedValue={OtherClientCategoryData[0] }

                                    />
                                </div>
                  </div>
                </div>
                <div className="dialog-container">
                  <div className="option">Employment Date Final : </div>{" "}
                  <div>
                    <select type="text" name="dialog-text" disabled>
                    <option>2001-01-06</option>
                    </select>
                  </div>
                  <div>
                    <div className="col-6">
                                    <AutoSelect
                                        loadData={null}
                                        loading={false}
                                        popoverWidth={200 + 30 + 'px'}
                                        errorText={''}
                                        editable={false}
                                        rightReadOnlyIcon={ICONS.HOME}
                                        // dataList={OtherClientCategoryData}
                                        onItemSelected={() => { }}
                                    // selectedValue={OtherClientCategoryData[0] }

                                    />
                                </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="flex1">
                <legend>Termination of Employment</legend>
                <div className="dialog-container">
                  <div className="option">Employment Terminated? : </div>
                  <div>
                    <select type="text" name="dialog-text" disabled >
                    <option> No </option>
                    </select>
                  </div>
                  <div>
                    <div className="col-6">

                                    <AutoSelect
                                        loadData={null}
                                        loading={false}
                                        popoverWidth={200 + 30 + 'px'}
                                        errorText={''}
                                        editable={false}
                                        rightReadOnlyIcon={ICONS.HOME}
                                        //dataList={OtherClientCategoryData}
                                        onItemSelected={() => { }}
                                    //selectedValue={OtherClientCategoryData[0] }

                                    />
                                </div>
                  </div>
                </div>
                <div className="dialog-container">
                  <div className="option">Termination date: </div>
                  <div>
                    <select type="text" name="dialog-text" disabled />
                  </div>
                  <div>
                    <div className="col-6">


                                    <AutoSelect
                                        loadData={null}
                                        loading={false}
                                        popoverWidth={200 + 30 + 'px'}
                                        errorText={''}
                                        editable={false}
                                        rightReadOnlyIcon={ICONS.HOME}
                                        // dataList={OtherClientCategoryData}
                                        onItemSelected={() => { }}
                                    // selectedValue={OtherClientCategoryData[0] }

                                    />
                                </div>
                  </div>
                </div>
                <div className="dialog-container">
                  <div className="option"> Eligible Retirement Date: </div>
                  <div>
                    <select type="text" name="dialog-text" disabled />
                  </div>
                  <div>
                    <div className="col-6">
                                    <AutoSelect
                                        loadData={null}
                                        loading={false}
                                        popoverWidth={200 + 30 + 'px'}
                                        errorText={''}
                                        editable={false}
                                        rightReadOnlyIcon={ICONS.HOME}
                                        // dataList={OtherClientCategoryData}
                                        onItemSelected={() => { }}
                                    // selectedValue={OtherClientCategoryData[0] }

                                    />
                                </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="dispflex">
              <fieldset className="flex1">
                <legend>Deductions</legend>
                <div className="dialog-container">
                  <div className="option">province of employment :</div>
                  <div>
                    <select type="text" name="dialog-text" disabled>
                      <option>Manitoba</option>
                    </select>
                  </div>
                  <div className="col-6">
                        <AutoSelect
                                        loadData={null}
                                        loading={false}
                                        popoverWidth={200 + 30 + 'px'}
                                        errorText={''}
                                        editable={false}
                                        rightReadOnlyIcon={ICONS.HOME}
                                        // dataList={OtherClientCategoryData}
                                        onItemSelected={() => { }}
                                    // selectedValue={OtherClientCategoryData[0] }
                                    />
                        </div>
                </div>
                <div className="dialog-container">
                  <div className="option">Fedra Tax Code :</div>
                  <div>
                    <input type="text" name="dialog-text"  disabled />
                  </div>
                  <div>
                    <div className="col-6">



                                    <AutoSelect
                                        loadData={null}
                                        loading={false}
                                        popoverWidth={200 + 30 + 'px'}
                                        errorText={''}
                                        editable={false}
                                        rightReadOnlyIcon={ICONS.HOME}
                                        //dataList={OtherClientCategoryData}
                                        onItemSelected={() => { }}
                                    //selectedValue={OtherClientCategoryData[0] }

                                    />
                                </div>
                  </div>
                </div>
                <div className="dialog-container">
                  <div className="option">Quebec Tax Code : </div>
                  <div>
                    <input type="text" size={5} name="dialog-text" disabled />
                  </div>
                  <div>
                    <div className="col-6">


                                    <AutoSelect
                                        loadData={null}
                                        loading={false}
                                        popoverWidth={200 + 30 + 'px'}
                                        errorText={''}
                                        editable={false}
                                        rightReadOnlyIcon={ICONS.HOME}
                                        // dataList={OtherClientCategoryData}
                                        onItemSelected={() => { }}
                                    // selectedValue={OtherClientCategoryData[0] }

                                    />
                                </div>
                  </div>
                </div>
                <div className="dialog-container">
                  <div className="option">ASO Payroll Deductions: </div>{" "}
                  <div>
                    <select type="text" name="dialog-text" disabled />
                  </div>
                  <div>
                    <div className="col-6">
                                    <AutoSelect
                                        loadData={null}
                                        loading={false}
                                        popoverWidth={200 + 30 + 'px'}
                                        errorText={''}
                                        editable={false}
                                        rightReadOnlyIcon={ICONS.HOME}
                                        // dataList={OtherClientCategoryData}
                                        onItemSelected={() => { }}
                                    // selectedValue={OtherClientCategoryData[0] }

                                    />
                                </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="flex1">
                <legend>Life Coverage(ER)</legend>
                <div className="dialog-container">
                  <div className="option">basic Life Coverage?: </div>
                  <div>
                    <select type="text" name="dialog-text" disabled />
                  </div>
                  <div>
                    <div className="col-6">

                                    <AutoSelect
                                        loadData={null}
                                        loading={false}
                                        popoverWidth={200 + 30 + 'px'}
                                        errorText={''}
                                        editable={false}
                                        rightReadOnlyIcon={ICONS.HOME}
                                        //dataList={OtherClientCategoryData}
                                        onItemSelected={() => { }}
                                    //selectedValue={OtherClientCategoryData[0] }

                                    />
                                </div>
                  </div>
                </div>
                <div className="dialog-container">
                  <div className="option">Optional Life Coverage?: </div>
                  <div>
                    <select type="text" name="dialog-text" disabled />
                  </div>
                  <div>
                    <div className="col-6">


                                    <AutoSelect
                                        loadData={null}
                                        loading={false}
                                        popoverWidth={200 + 30 + 'px'}
                                        errorText={''}
                                        editable={false}
                                        rightReadOnlyIcon={ICONS.HOME}
                                        // dataList={OtherClientCategoryData}
                                        onItemSelected={() => { }}
                                    // selectedValue={OtherClientCategoryData[0] }

                                    />
                                </div>
                  </div>
                </div>
                <div className="dialog-container">
                  <div className="option">Life Premiums Paid?: </div>
                  <div>
                    <select type="text" name="dialog-text" disabled />
                  </div>
                  <div>
                    <div className="col-6">
                                    <AutoSelect
                                        loadData={null}
                                        loading={false}
                                        popoverWidth={200 + 30 + 'px'}
                                        errorText={''}
                                        editable={false}
                                        rightReadOnlyIcon={ICONS.HOME}
                                        // dataList={OtherClientCategoryData}
                                        onItemSelected={() => { }}
                                    // selectedValue={OtherClientCategoryData[0] }

                                    />
                                </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
