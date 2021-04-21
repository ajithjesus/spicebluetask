import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";

import { connect } from "react-redux";
import * as LoginAction from "../../redux/action/Task";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./Taks.css";
import Moment from "moment";
import constant from "../constant/constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      taskdescirption: "",
      taks_time: new Date(),
      taks_date: new Date(),
      assignUser: this.props.assigned_user_name,
      taskarray: [],
      btn_id: "add",
      id: "",
      hide_show: false,
      assing_demo: "",
    };
  }
  async componentDidMount() {
    let loginsucess = await this.props.dispatch(LoginAction.userlogin());
    if (loginsucess) {
      var tokens_id = this.props.token;
      let getUserSuccess = await this.props.dispatch(
        LoginAction.getUser(tokens_id)
      );
      if (getUserSuccess) {
        this.getTask();
        this.props.dispatch({ type: "SUCCESS_MESSAGE", message: "" });
        // this.setState({assignUser: this.props.assigned_user_name});
        // this.setState({taskarray: this.props.taskarray});
      }
    }
  }
  componentDidUpdate = () => {
    if (this.props.message === "ADD_SUCCESS") {
      toast.success("Added Successfully");
      this.getTask();
      this.setState({
        taskdescirption: "",
        taks_time: new Date(),
        taks_date: new Date(),
        assignUser: this.props.assigned_user_name,
        hide_show: false,
      });
      this.props.dispatch({ type: "SUCCESS_MESSAGE", message: "" });
    } else if (this.props.message === "EDIT_SUCCESS") {
      toast.success("Updated Successfully");
      this.getTask();
      this.setState({
        taskdescirption: "",
        taks_time: new Date(),
        taks_date: new Date(),
        assignUser: this.state.assigned_user_name,
        id: "add",
        hide_show: false,
      });
      this.props.dispatch({ type: "SUCCESS_MESSAGE", message: "" });
    } else if (this.props.message === "DELETE_SUCCESS") {
      toast.error("Deleted Successfully");
      this.getTask();
      this.setState({
        taskdescirption: "",
        taks_time: new Date(),
        taks_date: new Date(),
        assignUser: this.props.assigned_user_name,
        id: "add",
        hide_show: false,
      });
      this.props.dispatch({ type: "SUCCESS_MESSAGE", message: "" });
    }
  };

  handlechangeAssign = (e) => {
    this.setState({ assignUser: e.target.value });
  };

  handlechange = (event) => {
    this.setState({ taskdescirption: event.target.value });
  };

  OnchangeTaskDate = (date) => {
    this.setState({ taks_date: date });
  };
  OnchangeTaskTime = (date) => {
    this.setState({ taks_time: date });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let {
      taskdescirption,
      taks_time,
      taks_date,
      assignUser,
      btn_id,
      id,
    } = this.state;
    assignUser = this.props.assigned_user_name;
    taks_date = Moment(taks_date).format("YYYY-MM-DD");
    taks_time = Moment(taks_time).format("ss") * 1;
    let time_zone = 15;
    let is_completed = 0;

    if (btn_id === "add") {
      const form_Data1 = JSON.stringify({
        assigned_user: assignUser,
        task_date: taks_date,
        task_time: taks_time,
        time_zone: time_zone,
        is_completed: is_completed,
        task_msg: taskdescirption,
      });
      var tokens_id = this.props.token;
      let addsucces = await this.props.dispatch(
        LoginAction.AddTaskAction(form_Data1, tokens_id)
      );
    } else {
      const form_Data2 = JSON.stringify({
        assigned_user: assignUser,
        task_date: taks_date,
        task_time: taks_time,
        time_zone: time_zone,
        is_completed: is_completed,
        task_msg: taskdescirption,
      });
      var tokens_id1 = this.props.token;
      let edit_success = await this.props.dispatch(
        LoginAction.EditTaskAction(form_Data2, tokens_id1, id)
      );
    }
  };

  getTask = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + this.props.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch(
      "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ taskarray: data.results });
        console.log(data.results);
      });
  };

  getTask_single = (id) => {
    this.setState({ btn_id: "update", id: id });
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + this.props.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch(
      "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/" +
        id,
      requestOptions
    )
      .then((response) => response.json())

      .then((data) => {
        {
          var date_format = constant.stringToDate1(data.results.task_date);

          this.setState({
            taskdescirption: data.results.task_msg,
            // taks_time: data.results.task_time,
            taks_date: date_format,
            assignUser: data.results.assigned_user,
            hide_show: true,
          });
        }
      });
  };

  getdeletetask = async (id) => {
    var deletetoken = this.props.token;
    let deletesuccess = await this.props.dispatch(
      LoginAction.DeleteTaskAction(deletetoken, id)
    );
  };

  render() {
    const { hide_show } = this.state;

    return (
      <section className="mt-5">
        <ToastContainer position="top-right" autoClose={2000} />
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <h5 className="task-management-heading"> Task Management</h5>
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <div className="task_card_wrapper">
                <div>
                  <h6>Add Taks</h6>
                </div>

                <div className="icon-wrapper-background">
                  <i
                    onClick={() => this.setState({ hide_show: !hide_show })}
                    className={
                      !this.state.hide_show ? "fa fa-plus" : "fa fa-minus"
                    }
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </Col>
          </Row>
          {this.state.hide_show && (
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Task Description</Form.Label>
                    <Form.Control
                      name="taskdescription"
                      value={this.state.taskdescirption}
                      onChange={this.handlechange}
                      type="text"
                      placeholder="Task description"
                    />
                  </Form.Group>

                  <Row>
                    <Col md={4}>
                      <DatePicker
                        name="taks_date"
                        selected={this.state.taks_date}
                        minDate={new Date()}
                        onChange={(date) => {
                          this.OnchangeTaskDate(date);
                        }}
                        dateFormat="dd-MM-yyyy"
                      />
                    </Col>
                    <Col md={4}>
                      <DatePicker
                        className=""
                        selected={this.state.taks_time}
                        onChange={(date) => {
                          this.OnchangeTaskTime(date);
                        }}
                        showTimeSelect
                        showTimeSelectOnly
                        // timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="pt-2">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Assigned User</Form.Label>
                        <Form.Control
                          name="assignUser"
                          value={this.state.assignUser}
                          onChange={this.handlechangeAssign}
                          type="text"
                          placeholder="Assigned User"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12} className="submit_wrapper">
                      <div>
                        <Button
                          variant="primary"
                          type="button"
                          onClick={this.handleSubmit}
                        >
                          Submit
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          )}
          <Row className="mt-4">
            <Col md={12}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>sno</th>
                    <th>assigned_user</th>
                    <th>task_date</th>

                    <th>task_msg</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.taskarray.map((item, id) => {
                    return (
                      <tr key={id}>
                        <td>{id + 1}</td>
                        <td>{item.assigned_user}</td>
                        <td>{item.task_date}</td>

                        <td>{item.task_msg}</td>
                        <td>
                          <i
                            onClick={() => {
                              this.getTask_single(item.id);
                            }}
                            className="fa fa-edit"
                            aria-hidden="true"
                          ></i>
                        </td>
                        <td>
                          <i
                            onClick={() => {
                              this.getdeletetask(item.id);
                            }}
                            className="fa fa-trash"
                            aria-hidden="true"
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    taskarray: state.taskarray,
    assigned_user_name: state.assigned_user_name,
    message: state.message,
  };
};
export default connect(mapStateToProps, null)(Task);
