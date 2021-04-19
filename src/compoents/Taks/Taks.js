import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";

import { connect } from "react-redux";
import * as LoginAction from "../../redux/action/Task";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./Taks.css";
import Moment from "moment";
import constant from "../constant/constant";

var data = [
  { author: "Pete Hunt", text: "This is one comment" },
  { author: "Jordan Walke", text: "This is *another* comment" },
];

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      taskdescirption: "",
      taks_time: new Date(),
      taks_date: new Date(),
      assignUser: "Ajithkumar",
      taskarray: [],
      btn_id: "add",
      id: "",
      hide_show: false,
    };
  }
   async componentDidMount (){
  let loginsucess=await this.props.dispatch(LoginAction.userlogin());
    if(loginsucess)
    {
      var tokens_id = this.props.token;
      let getUserSuccess=await this.props.dispatch(LoginAction.getUser(tokens_id));
      if(getUserSuccess)
      {
      this.getTask();
      }
    }
  }

  handlechange = (event) => {
    this.setState({ taskdescirption: event.target.value });
  };

  OnchangeTaskDate = (date) => {
    this.setState({ taks_date: date });
  };
  OnchangeTaskTime = (date) => {
    this.setState({ taks_time: date });
  };

  assignFunction = (event) => {
    const event_value = event.target.value.toString();
    this.setState({ assignUser: event_value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let {
      taskdescirption,
      taks_time,
      taks_date,
      assignUser,
      btn_id,
      id,
    } = this.state;

   
    taks_date = Moment(taks_date).format("YYYY-MM-DD");
    taks_time = Moment(taks_time).format("ss") * 1;
    let time_zone = 15;
    let is_completed = 0;

    if (btn_id === "add") {
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.props.token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assigned_user: assignUser,
          task_date: taks_date,
          task_time: taks_time,
          time_zone: time_zone,
          is_completed: is_completed,
          task_msg: taskdescirption,
        }),
      };
      fetch(
        "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          alert("Added Successfully");
          this.getTask();
          this.setState({
            taskdescirption: "",
            taks_time: new Date(),
            taks_date: new Date(),
            assignUser: "Ajithkumar",
            hide_show: false,
          });
        });
    } else {
      const requestOptions = {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + this.props.token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assigned_user: assignUser,
          task_date: taks_date,
          task_time: taks_time,
          time_zone: time_zone,
          is_completed: is_completed,
          task_msg: taskdescirption,
        }),
      };
      fetch(
        "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/" +
          id,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          alert("Update succesfully");
          this.getTask();
          this.setState({
            taskdescirption: "",
            taks_time: new Date(),
            taks_date: new Date(),
            assignUser: "Ajithkumar",
            id: "add",
            hide_show: false,
          });
        });
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


  getdeletetask = (id) => {
    const requestOptions = {
      method: "DELETE",
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
          alert("delete success");
          this.getTask();


        }
      });
  };

  hide_and_show = () => {
    this.setState({ hide_show: true });
  };

  render() {
    return (
      <section className="mt-5">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <h5>Task Management</h5>
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <div className="task_card_wrapper">
                <div>
                  <h6>Add Taks</h6>
                </div>

                <div>
                  <i
                    onClick={this.hide_and_show}
                    className="fa fa-plus"
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
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Assign User</Form.Label>
                      <Form.Control
                        as="select"
                        as="select"
                        value={this.state.assignUser}
                        onChange={this.assignFunction}
                      >
                        <option value="Ajithkumar">Ajith Kumar</option>
                        <option value="Vijay">Vijay</option>
                        <option value="Kamal">Kamal</option>
                      </Form.Control>
                    </Form.Group>
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
                      <tr>
                        <td>{id + 1}</td>
                        <td>{item.assigned_user}</td>
                        <td>{item.task_date}</td>

                        <td>{item.task_msg}</td>
                        <td>
                          <i
                            onClick={() => {
                              this.getTask_single(item.id);
                            }}
                            class="fa fa-edit"
                            aria-hidden="true"
                          ></i>
                        </td>
                        <td>
                          <i
                            onClick={() => {
                              this.getdeletetask(item.id);
                            }}
                            class="fa fa-trash"
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
    token: state.Login.token,
    taskarray: state.Login.taskarray,
    deleteTask: state.Login.deleteTask,
  };
};
export default connect(mapStateToProps, null)(Task);
