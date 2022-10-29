import React from 'react';
import {MDBContainer} from "mdbreact";

export const About = () => {
    return (
        <div style={{background: " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", height : "710px"}}>
            <h2 style={{color: "white", marginBottom: "20px", paddingTop: "30px"}}><b> GIỚI THIỆU </b></h2>
            <p style={{fontStyle: 'italic', color: "white", marginBottom: "20px"}}>Họ tên: Đào Xuân Tân</p>
            <p style={{fontStyle: 'italic', color: "white", marginBottom: "20px"}}>MSSV: 46.01.104.160</p>
            <p style={{fontStyle: 'italic', color: "white", marginBottom: "20px"}}>Email: 4601104160@student.hcmue.edu.vn</p>
            <img src="DaoXuanTan.jpg" alt="Tân" width="300"/>
        </div>
    )
} 