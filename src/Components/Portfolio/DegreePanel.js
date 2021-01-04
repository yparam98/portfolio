import React, { Component } from 'react';
import '../../assets/css/portfolio_components/Education.css'
import axios from 'axios';

class DegreePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: {},
            courses: [],
            api_url: "https://yathavanparamesh.ca",
        }
    }

    componentDidMount() {
        this.getCourses();
        this.getSchool();
    }

    getCourses = async () => {
        await axios.get(
            this.state.api_url + "/api/education/getCoursesByDegree",
            {
                params: {
                    id: this.props.degree.degree_id,
                }
            }
        ).then((response) => {
            for (let instance of response.data) {
                this.state.courses.push(instance);
            }
            this.setState({
                dataLoaded: true
            });
        }).catch((err) => {
            console.log("Error: " + err);
        });
    };

    getSchool = async () => {
        await axios.get(
            this.state.api_url + "/api/education/getSchoolByID",
            {
                params: {
                    id: this.props.degree.school_id
                }
            }
        ).then((response) => {
            this.setState({
                school: response.data[0],
                dataLoaded: true
            });
        }).catch((err) => {
            console.log("Error: " + err);
        });
    };

    render() {
        return (
            <div className="degree_panel" style={{ backgroundColor: this.state.school.colour }}>
                <img id="school_logo" src={this.state.api_url + "/static/" + this.state.school.logo_path} />
                <div>
                    <div className="deets">
                        <p id="degree_title">{this.props.degree.type} in {this.props.degree.name} ({this.props.degree.duration})</p>
                        <p><a href={"https://www.google.com/maps/place/" + this.state.school.address} style={{ color: 'inherit' }}>{this.state.school.address}</a></p>
                        <p><a href={"tel:" + this.state.school.phone_num} style={{ color: 'inherit' }}>{this.state.school.phone_num}</a></p>
                    </div>
                    <div className="courses">
                        {
                            this.state.dataLoaded ? (
                                this.state.courses.map((val, ind) => {
                                    if (val.display == true) return <p>{val.description}</p>
                                })
                            ) : <p>Loading...</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default DegreePanel;