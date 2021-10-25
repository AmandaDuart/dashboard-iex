import React from 'react';
import '../../App.css';
import '../dashboard/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Carousel from 'react-bootstrap/Carousel';
import  Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { MdTrendingUp } from "react-icons/md";




class Lateral extends React.Component{
  render() {
    return (
        <>
        <Row>
            <Carousel fade>
                <Carousel.Item>
                    
                    <Row xs={12} md={12}>
                        <Card className='borda card-empresas-recentes'style={{ width: '20rem' }}>
                            <Card.Body>
                                <Row xs={12} md={12}>

                                    <Col xs={3} md={3}>
                                        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzNjNWE5YSI+PHBhdGggZD0iTTg2LDEwLjMyYy00MS43OTYsMCAtNzUuNjgsMzMuODg0IC03NS42OCw3NS42OGMwLDM3Ljk0MzIgMjcuOTUsNjkuMjcxMjggNjQuMzY5MjgsNzQuNzQ0MzJ2LTU0LjY4NTY4aC0xOC43MjM5MnYtMTkuODkzNTJoMTguNzIzOTJ2LTEzLjIzNzEyYzAsLTIxLjkxNjI0IDEwLjY3Nzc2LC0zMS41Mzc5MiAyOC44OTI1NiwtMzEuNTM3OTJjOC43MjM4NCwwIDEzLjMzNjg4LDAuNjQ2NzIgMTUuNTIxMjgsMC45NDI1NnYxNy4zNjUxMmgtMTIuNDI1MjhjLTcuNzMzMTIsMCAtMTAuNDMzNTIsNy4zMzA2NCAtMTAuNDMzNTIsMTUuNTkzNTJ2MTAuODczODRoMjIuNjYyNzJsLTMuMDc1MzYsMTkuODkzNTJoLTE5LjU4NzM2djU0Ljg0NzM2YzM2LjkzODcyLC01LjAxMjA4IDY1LjQzNTY4LC0zNi41OTQ3MiA2NS40MzU2OCwtNzQuOTA2YzAsLTQxLjc5NiAtMzMuODg0LC03NS42OCAtNzUuNjgsLTc1LjY4eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/>                            
                                    </Col>

                                    <Col xs={4} md={4}>

                                        <Card.Title>FB</Card.Title>
                                        
                                        <Col>                    
                                            <Card.Subtitle className=" text-muted">Facebook</Card.Subtitle>
                                        </Col>

                                    </Col>

                                    <Col xs={5} md={5}className= 'porcetagemP'>
                                        +2.3%<MdTrendingUp/>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='borda card-empresas-recentes'>
                            <Card.Body>
                                <Row xs={12} md={12}>
                                    
                                    <Col xs={3} md={3}>
                                        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA1MTIgNTEyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGZpbGw9IiNCQ0JDQkMiIGQ9Ik00NzQuMiwxNjEuN2MtMTYuMS00Ni42LTQ2LjctODcuMS05MS4zLTEwOS42Yy01MC45LTI1LjctMTExLTI4LjEtMTY2LjQtMTkuMyBDMTY2LjcsNDAuOCwxMTQuMiw1OC44LDc2LjksOTRjLTE5LjYsMTguNS0zNC43LDQwLjktNDIuNyw2Ni44Yy04LDI2LTEwLjQsNTMuMS0xMi4xLDgwLjFjLTAuMSwxLjEtMC40LDItMSwyLjcgYzAsMC4yLDAuMSwwLjUsMC4xLDAuOGMwLDUyLjktMS4xLDEwOC4zLDMwLjEsMTUzLjljMjUuMywzNy4xLDY0LjUsNjEuNSwxMDcuMiw3My43Yzg4LDI1LjIsMTk0LjIsOS42LDI2NC45LTUwLjggQzQ5Ny41LDM1Ny45LDUwNC4zLDI0OC45LDQ3NC4yLDE2MS43eiBNMjQyLjksMTMxLjhjMC0xLjYsMC43LTIuOSwxLjYtMy44YzEuMi0yLjEsMi45LTMuOSw0LjEtNi40YzIuNS01LjEsNC40LTEwLjUsNi45LTE1LjYgYzUuMS0xMC4yLDEzLjgtMTkuMiwyMi44LTI2LjFjMTkuNS0xNC44LDQ0LjYtMjIuOSw2OS4xLTIxLjVjMi44LDAuMiw1LDEuNiw1LjQsNC42YzEuOCwxNC44LTIuNywyOS4zLTEzLDQwLjIgYy01LjIsNS41LTExLjIsMTAuMi0xNy43LDE0Yy0zLjIsMS44LTYuNCwzLjYtOS43LDUuMWMtMi44LDEuMy02LjIsMi4yLTguNywzLjljLTguOSw1LjktMTkuNiwxMC40LTI5LjksMTIuOSBjLTcuMiwxLjctMTcuNCwzLjUtMjIuNi0yLjVjLTIuOCwyLjYtOC40LDEuOC04LjQtM1YxMzEuOHogTTQwNi43LDE4Ni40Yy0wLjMsMi4xLTEuNiwzLjMtMy4xLDMuOGMtMSwxLjQtMi42LDIuNC00LjcsMi4yIGMtMTkuMi0xLjQtMzcuMywxMi43LTM2LjEsMzIuN2MwLjEsMi4yLTEuMiw0LjQtMy4zLDUuMWMtNi45LDIuNC0xMy44LDYuMi0xOC42LDExLjhjLTMuOCw0LjQtOC42LDEyLjUtNS43LDE4LjUgYzEuMSwyLjIsMi44LDQuMSw0LDYuMmMxLjcsMy4xLDEuNyw1LjcsMS40LDkuMmMtMC42LDguMi0yLjIsMTYuNyw0LjgsMjIuN2M1LjQsNC42LDExLjUsOCwxNS45LDEzLjhjMS45LDIuNCwzLjIsNSw0LjYsNy43IGMxLjMsMi43LDMuNCw1LDQuNiw3LjdjMi4yLDUsNi40LDkuNCwxMC42LDEyLjhjMi40LDEuOSw4LjUsNywxMS45LDQuN2M0LjUtMi45LDkuMSwyLjMsNy41LDYuMWMyLjIsMS4xLDMuNiwzLjUsMS44LDYuMiBjLTExLjMsMTcuNi0yNC40LDM1LjUtNDMuOSw0NC41Yy0xMC4zLDQuNy0yMC44LDUuOS0zMiw2LjRjLTE0LjIsMC43LTI4LjUtMC4xLTQyLjctMS40Yy0xNS4xLTEuNC0zMC4xLTMuNC00NS4yLTQuNSBjLTExLTAuOC0yMS43LTEuNS0zMi4zLTQuN2MtMTguOC01LjctMzUuNi0xNi4xLTQ4LjgtMzAuNmMtMjcuNC0zMC4yLTQxLjMtNzEuMS00OC41LTExMC42Yy02LjItMzMuOC04LjctNzkuNSwyMi4xLTEwMi44IGM4LjYtNi41LDE5LjMtMTEuMSwzMC4xLTEyLjFjMTMuOS0xLjMsMjcuMywyLjMsNDAuNCw2LjRjMTMuMiw0LjIsMjcuNSw5LjYsNDEuNiw5LjZjMTMuNiwwLDI2LjEtNC42LDM4LjUtOS43IGMxMi41LTUuMSwyNS4yLTEwLjcsMzguNi0xMy4xYzEyLjctMi4yLDI1LjYtMS40LDM3LjgsMi43YzEyLjQsNC4yLDI0LjIsMTEuMywzMy42LDIwLjRDMzk5LjQsMTY1LjYsNDA4LjQsMTc0LjYsNDA2LjcsMTg2LjR6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0Q2RTVFNSIgZD0iTTM2NC42LDMzNy40Yy00LTUuOC02LjQtMTIuOC0xMC43LTE4LjRjLTUtNi40LTEyLjQtOS43LTE3LjctMTUuN2MtNy4yLTguMS02LjMtMTcuNS01LjUtMjcuNiBjMC4zLTQuMy0xLjUtNS41LTMuNS05Yy0xLjgtMy4xLTIuNy02LjItMi43LTkuOWMwLTE2LjYsMTQtMjguOSwyOC4zLTM0LjljMC42LTIzLjYsMjEuMy0zOS42LDQ0LjItMzkuNiBjLTAuNS03LTguMy0xMy4yLTEyLjgtMTcuNmMtNi45LTYuOC0xNS44LTEyLjMtMjQuNy0xNS45Yy0xOC45LTcuNy0zNy41LTUuNC01Ni4yLDEuNGMtMTcuOCw2LjUtMzUuMywxNi4zLTU0LjUsMTcuMyBjLTE5LjksMS4xLTM4LjQtNi43LTU3LjItMTJjLTEzLjUtMy44LTI3LjYtNi4yLTQxLjItMWMtOC40LDMuMy0xNi4xLDguNC0yMS43LDE1LjZjLTExLDE0LjEtMTMuOCwzMi45LTEzLjUsNTAuMyBjMC4zLDE4LjcsMy42LDM3LjIsOC4yLDU1LjJjNS4xLDIwLjIsMTIuMiw0MC4yLDIyLjUsNTguNGMxMC4yLDE3LjksMjMuNywzNC42LDQxLjcsNDUuMWM5LjIsNS4zLDE5LjIsOS4yLDI5LjcsMTEuMiBjMTMuMiwyLjYsMjYuNywyLjYsNDAsNGMxNS45LDEuNywzMS45LDMuNyw0Ny45LDQuM2MxMy4xLDAuNSwyNy43LDEuMiw0MC40LTIuNGMyMC45LTYuMSwzNC42LTIyLjksNDYuMS00MC40IEMzODEuMiwzNTYuMSwzNjkuOCwzNDQuOSwzNjQuNiwzMzcuNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRDZFNUU1IiBkPSJNMjg2LjMsODYuNGMtOCw1LjktMTYuNywxMy43LTIxLjIsMjIuOGMtMyw1LjktNS4xLDEyLjQtOC4zLDE4LjNjMC43LDAuNSwxLjQsMS4zLDEuOCwyLjMgYzAuNSwxLjIsNC40LDEuMSw2LjQsMC45YzQuOC0wLjYsOS40LTEuOSwxMy45LTMuNmM0LjUtMS42LDktMy41LDEzLjMtNS43YzMuMS0xLjYsNi0zLjgsOS4zLTUuMmMyMS4zLTguNSw0Mi4xLTIzLjYsNDEuNy00Ny45IEMzMjMsNjguMiwzMDIuNiw3NC41LDI4Ni4zLDg2LjR6Ij48L3BhdGg+PHBhdGggZD0iTTQ4Ny44LDE2OC43Yy0xNC4yLTQ2LjktNDAuOS04OC4zLTgyLTExNS43QzM1OS41LDIyLDMwMC41LDE0LjUsMjQ2LDE4LjVjLTUxLjcsMy44LTEwNC42LDE3LjktMTQ4LjYsNDYgYy0yMS42LDEzLjgtNDAuOSwzMS45LTU1LDUzLjRjLTE0LjksMjIuNy0yMi41LDQ4LjgtMjYuNiw3NS40Yy0yLjMsMTUuMS0zLjQsMzAuMy00LjQsNDUuNmMtMC4xLDAuOSwwLjEsMS44LDAuNCwyLjYgYy0wLjksMC45LTEuNSwyLjItMS41LDMuOGMwLDMwLjEtMC42LDYwLjQsNC42LDkwLjJjNC44LDI3LjEsMTUuMiw1Mi45LDMxLjYsNzUuMWMyOS4yLDM5LjUsNzMuNSw2My4zLDEyMC40LDc1IGM4OC45LDIyLjIsMTk0LjIsMy43LDI2NC41LTU3LjFDNTA1LjUsMzY0LjQsNTE0LjcsMjU3LjYsNDg3LjgsMTY4Ljd6IE00MjMuNCw0MjEuMmMtNzAuOCw2MC40LTE3Ni45LDc2LTI2NC45LDUwLjggYy00Mi43LTEyLjItODEuOS0zNi42LTEwNy4yLTczLjdjLTMxLjEtNDUuNi0zMC4xLTEwMS0zMC4xLTE1My45YzAtMC4zLDAtMC41LTAuMS0wLjhjMC41LTAuNywwLjktMS42LDEtMi43IGMxLjctMjcsNC4xLTU0LjEsMTIuMS04MC4xYzcuOS0yNS45LDIzLjEtNDguMyw0Mi43LTY2LjhjMzcuMy0zNS4yLDg5LjgtNTMuMiwxMzkuNi02MS4xYzU1LjUtOC44LDExNS41LTYuNCwxNjYuNCwxOS4zIGM0NC42LDIyLjUsNzUuMSw2My4xLDkxLjMsMTA5LjZDNTA0LjMsMjQ4LjksNDk3LjUsMzU3LjksNDIzLjQsNDIxLjJ6Ij48L3BhdGg+PHBhdGggZD0iTTM5MS42LDE1OC4xYy05LjQtOS4xLTIxLjItMTYuMi0zMy42LTIwLjRjLTEyLjItNC4xLTI1LjEtNS0zNy44LTIuN2MtMTMuNCwyLjQtMjYuMSw4LTM4LjYsMTMuMSBjLTEyLjQsNS4xLTI0LjksOS43LTM4LjUsOS43Yy0xNC4xLDAtMjguNC01LjMtNDEuNi05LjZjLTEzLjEtNC4yLTI2LjUtNy43LTQwLjQtNi40Yy0xMC44LDEtMjEuNSw1LjYtMzAuMSwxMi4xIGMtMzAuOCwyMy4zLTI4LjMsNjguOS0yMi4xLDEwMi44YzcuMiwzOS41LDIxLjEsODAuNCw0OC41LDExMC42YzEzLjIsMTQuNiwzMC4xLDI1LDQ4LjgsMzAuNmMxMC42LDMuMiwyMS4zLDMuOSwzMi4zLDQuNyBjMTUuMSwxLjEsMzAuMSwzLjEsNDUuMiw0LjVjMTQuMiwxLjMsMjguNCwyLjEsNDIuNywxLjRjMTEuMi0wLjYsMjEuNy0xLjcsMzItNi40YzE5LjYtOC45LDMyLjYtMjYuOSw0My45LTQ0LjUgYzEuNy0yLjcsMC40LTUuMS0xLjgtNi4yYzEuNi0zLjktMy05LjEtNy41LTYuMWMtMy40LDIuMi05LjQtMi44LTExLjktNC43Yy00LjItMy4zLTguNS03LjgtMTAuNi0xMi44Yy0xLjItMi43LTMuMy01LTQuNi03LjcgYy0xLjMtMi43LTIuNy01LjMtNC42LTcuN2MtNC40LTUuOC0xMC41LTkuMS0xNS45LTEzLjhjLTctNi01LjUtMTQuNC00LjgtMjIuN2MwLjMtMy41LDAuMy02LjEtMS40LTkuMmMtMS4yLTIuMi0zLTQtNC02LjIgYy0yLjktNiwxLjktMTQuMSw1LjctMTguNWM0LjgtNS42LDExLjctOS40LDE4LjYtMTEuOGMyLjEtMC43LDMuNS0yLjksMy4zLTUuMWMtMS4zLTIwLDE2LjktMzQuMSwzNi4xLTMyLjcgYzIuMSwwLjIsMy43LTAuOCw0LjctMi4yYzEuNS0wLjQsMi44LTEuNiwzLjEtMy44QzQwOC40LDE3NC42LDM5OS40LDE2NS42LDM5MS42LDE1OC4xeiBNMzUyLjgsMjIyYy0xNC4zLDYtMjguMywxOC4zLTI4LjMsMzQuOSBjMCwzLjYsMSw2LjcsMi43LDkuOWMyLDMuNSwzLjgsNC43LDMuNSw5Yy0wLjcsMTAuMS0xLjcsMTkuNSw1LjUsMjcuNmM1LjMsNiwxMi44LDkuMiwxNy43LDE1LjdjNC4zLDUuNiw2LjcsMTIuNiwxMC43LDE4LjQgYzUuMSw3LjUsMTYuNSwxOC43LDI3LDE4LjNjLTExLjUsMTcuNS0yNS4yLDM0LjMtNDYuMSw0MC40Yy0xMi43LDMuNy0yNy40LDIuOS00MC40LDIuNGMtMTYtMC42LTMxLjktMi42LTQ3LjktNC4zIGMtMTMuMy0xLjQtMjYuOS0xLjUtNDAtNGMtMTAuNS0yLTIwLjQtNS45LTI5LjctMTEuMmMtMTguMS0xMC40LTMxLjUtMjcuMi00MS43LTQ1LjFjLTEwLjMtMTguMS0xNy40LTM4LjItMjIuNS01OC40IGMtNC42LTE4LTcuOC0zNi42LTguMi01NS4yYy0wLjMtMTcuNCwyLjUtMzYuMywxMy41LTUwLjNjNS42LTcuMiwxMy4yLTEyLjMsMjEuNy0xNS42YzEzLjUtNS4zLDI3LjYtMi44LDQxLjIsMSBjMTguOCw1LjMsMzcuMywxMy4xLDU3LjIsMTJjMTkuMi0xLDM2LjctMTAuOSw1NC41LTE3LjNjMTguOC02LjgsMzcuMy05LjEsNTYuMi0xLjRjOSwzLjcsMTcuOCw5LjIsMjQuNywxNS45IGM0LjUsNC40LDEyLjMsMTAuNiwxMi44LDE3LjZDMzc0LjEsMTgyLjQsMzUzLjQsMTk4LjQsMzUyLjgsMjIyeiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNTIuOCw2M2MtMC40LTMtMi42LTQuNC01LjQtNC42Yy0yNC41LTEuNC00OS42LDYuNy02OS4xLDIxLjVjLTksNi45LTE3LjcsMTUuOS0yMi44LDI2LjFjLTIuNSw1LjEtNC40LDEwLjUtNi45LDE1LjYgYy0xLjIsMi41LTIuOSw0LjMtNC4xLDYuNGMtMSwwLjktMS42LDIuMi0xLjYsMy44djEuOGMwLDQuOCw1LjYsNS42LDguNCwzYzUuMiw1LjksMTUuNSw0LjIsMjIuNiwyLjVjMTAuMy0yLjUsMjEtNywyOS45LTEyLjkgYzIuNi0xLjcsNS45LTIuNiw4LjctMy45YzMuMy0xLjUsNi41LTMuMyw5LjctNS4xYzYuNS0zLjgsMTIuNS04LjUsMTcuNy0xNEMzNTAuMSw5Mi4zLDM1NC42LDc3LjgsMzUyLjgsNjN6IE0zMDEuNSwxMTYuMiBjLTMuMywxLjMtNi4yLDMuNS05LjMsNS4yYy00LjMsMi4yLTguOCw0LTEzLjMsNS43Yy00LjUsMS42LTkuMSwzLTEzLjksMy42Yy0yLDAuMi01LjksMC40LTYuNC0wLjljLTAuNC0xLTEtMS44LTEuOC0yLjMgYzMuMi01LjgsNS4zLTEyLjMsOC4zLTE4LjNjNC41LTksMTMuMi0xNi45LDIxLjItMjIuOGMxNi4zLTExLjksMzYuNy0xOC4zLDU2LjgtMTguMkMzNDMuNiw5Mi42LDMyMi43LDEwNy42LDMwMS41LDExNi4yeiI+PC9wYXRoPjwvc3ZnPg=="/>                            </Col>
                                    
                                    <Col xs={4} md={4}>
                                        <Card.Title>AAPL</Card.Title>
                                        <Col >                    
                                            <Card.Subtitle className="mb-2 text-muted">Apple</Card.Subtitle>
                                        </Col>
                                    </Col>
                                    <Col xs={5} md={5} className= 'porcetagemN'> -0.12% <MdTrendingUp/>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='borda card-empresas-recentes'>
                            <Card.Body>
                                <Row xs={12} md={12}>
                                    
                                    <Col xs={3} md={3}>
                                        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA1MTIgNTEyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGZpbGw9IiNCQ0JDQkMiIGQ9Ik00NzQuMiwxNjEuN2MtMTYuMS00Ni42LTQ2LjctODcuMS05MS4zLTEwOS42Yy01MC45LTI1LjctMTExLTI4LjEtMTY2LjQtMTkuMyBDMTY2LjcsNDAuOCwxMTQuMiw1OC44LDc2LjksOTRjLTE5LjYsMTguNS0zNC43LDQwLjktNDIuNyw2Ni44Yy04LDI2LTEwLjQsNTMuMS0xMi4xLDgwLjFjLTAuMSwxLjEtMC40LDItMSwyLjcgYzAsMC4yLDAuMSwwLjUsMC4xLDAuOGMwLDUyLjktMS4xLDEwOC4zLDMwLjEsMTUzLjljMjUuMywzNy4xLDY0LjUsNjEuNSwxMDcuMiw3My43Yzg4LDI1LjIsMTk0LjIsOS42LDI2NC45LTUwLjggQzQ5Ny41LDM1Ny45LDUwNC4zLDI0OC45LDQ3NC4yLDE2MS43eiBNMjQyLjksMTMxLjhjMC0xLjYsMC43LTIuOSwxLjYtMy44YzEuMi0yLjEsMi45LTMuOSw0LjEtNi40YzIuNS01LjEsNC40LTEwLjUsNi45LTE1LjYgYzUuMS0xMC4yLDEzLjgtMTkuMiwyMi44LTI2LjFjMTkuNS0xNC44LDQ0LjYtMjIuOSw2OS4xLTIxLjVjMi44LDAuMiw1LDEuNiw1LjQsNC42YzEuOCwxNC44LTIuNywyOS4zLTEzLDQwLjIgYy01LjIsNS41LTExLjIsMTAuMi0xNy43LDE0Yy0zLjIsMS44LTYuNCwzLjYtOS43LDUuMWMtMi44LDEuMy02LjIsMi4yLTguNywzLjljLTguOSw1LjktMTkuNiwxMC40LTI5LjksMTIuOSBjLTcuMiwxLjctMTcuNCwzLjUtMjIuNi0yLjVjLTIuOCwyLjYtOC40LDEuOC04LjQtM1YxMzEuOHogTTQwNi43LDE4Ni40Yy0wLjMsMi4xLTEuNiwzLjMtMy4xLDMuOGMtMSwxLjQtMi42LDIuNC00LjcsMi4yIGMtMTkuMi0xLjQtMzcuMywxMi43LTM2LjEsMzIuN2MwLjEsMi4yLTEuMiw0LjQtMy4zLDUuMWMtNi45LDIuNC0xMy44LDYuMi0xOC42LDExLjhjLTMuOCw0LjQtOC42LDEyLjUtNS43LDE4LjUgYzEuMSwyLjIsMi44LDQuMSw0LDYuMmMxLjcsMy4xLDEuNyw1LjcsMS40LDkuMmMtMC42LDguMi0yLjIsMTYuNyw0LjgsMjIuN2M1LjQsNC42LDExLjUsOCwxNS45LDEzLjhjMS45LDIuNCwzLjIsNSw0LjYsNy43IGMxLjMsMi43LDMuNCw1LDQuNiw3LjdjMi4yLDUsNi40LDkuNCwxMC42LDEyLjhjMi40LDEuOSw4LjUsNywxMS45LDQuN2M0LjUtMi45LDkuMSwyLjMsNy41LDYuMWMyLjIsMS4xLDMuNiwzLjUsMS44LDYuMiBjLTExLjMsMTcuNi0yNC40LDM1LjUtNDMuOSw0NC41Yy0xMC4zLDQuNy0yMC44LDUuOS0zMiw2LjRjLTE0LjIsMC43LTI4LjUtMC4xLTQyLjctMS40Yy0xNS4xLTEuNC0zMC4xLTMuNC00NS4yLTQuNSBjLTExLTAuOC0yMS43LTEuNS0zMi4zLTQuN2MtMTguOC01LjctMzUuNi0xNi4xLTQ4LjgtMzAuNmMtMjcuNC0zMC4yLTQxLjMtNzEuMS00OC41LTExMC42Yy02LjItMzMuOC04LjctNzkuNSwyMi4xLTEwMi44IGM4LjYtNi41LDE5LjMtMTEuMSwzMC4xLTEyLjFjMTMuOS0xLjMsMjcuMywyLjMsNDAuNCw2LjRjMTMuMiw0LjIsMjcuNSw5LjYsNDEuNiw5LjZjMTMuNiwwLDI2LjEtNC42LDM4LjUtOS43IGMxMi41LTUuMSwyNS4yLTEwLjcsMzguNi0xMy4xYzEyLjctMi4yLDI1LjYtMS40LDM3LjgsMi43YzEyLjQsNC4yLDI0LjIsMTEuMywzMy42LDIwLjRDMzk5LjQsMTY1LjYsNDA4LjQsMTc0LjYsNDA2LjcsMTg2LjR6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0Q2RTVFNSIgZD0iTTM2NC42LDMzNy40Yy00LTUuOC02LjQtMTIuOC0xMC43LTE4LjRjLTUtNi40LTEyLjQtOS43LTE3LjctMTUuN2MtNy4yLTguMS02LjMtMTcuNS01LjUtMjcuNiBjMC4zLTQuMy0xLjUtNS41LTMuNS05Yy0xLjgtMy4xLTIuNy02LjItMi43LTkuOWMwLTE2LjYsMTQtMjguOSwyOC4zLTM0LjljMC42LTIzLjYsMjEuMy0zOS42LDQ0LjItMzkuNiBjLTAuNS03LTguMy0xMy4yLTEyLjgtMTcuNmMtNi45LTYuOC0xNS44LTEyLjMtMjQuNy0xNS45Yy0xOC45LTcuNy0zNy41LTUuNC01Ni4yLDEuNGMtMTcuOCw2LjUtMzUuMywxNi4zLTU0LjUsMTcuMyBjLTE5LjksMS4xLTM4LjQtNi43LTU3LjItMTJjLTEzLjUtMy44LTI3LjYtNi4yLTQxLjItMWMtOC40LDMuMy0xNi4xLDguNC0yMS43LDE1LjZjLTExLDE0LjEtMTMuOCwzMi45LTEzLjUsNTAuMyBjMC4zLDE4LjcsMy42LDM3LjIsOC4yLDU1LjJjNS4xLDIwLjIsMTIuMiw0MC4yLDIyLjUsNTguNGMxMC4yLDE3LjksMjMuNywzNC42LDQxLjcsNDUuMWM5LjIsNS4zLDE5LjIsOS4yLDI5LjcsMTEuMiBjMTMuMiwyLjYsMjYuNywyLjYsNDAsNGMxNS45LDEuNywzMS45LDMuNyw0Ny45LDQuM2MxMy4xLDAuNSwyNy43LDEuMiw0MC40LTIuNGMyMC45LTYuMSwzNC42LTIyLjksNDYuMS00MC40IEMzODEuMiwzNTYuMSwzNjkuOCwzNDQuOSwzNjQuNiwzMzcuNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRDZFNUU1IiBkPSJNMjg2LjMsODYuNGMtOCw1LjktMTYuNywxMy43LTIxLjIsMjIuOGMtMyw1LjktNS4xLDEyLjQtOC4zLDE4LjNjMC43LDAuNSwxLjQsMS4zLDEuOCwyLjMgYzAuNSwxLjIsNC40LDEuMSw2LjQsMC45YzQuOC0wLjYsOS40LTEuOSwxMy45LTMuNmM0LjUtMS42LDktMy41LDEzLjMtNS43YzMuMS0xLjYsNi0zLjgsOS4zLTUuMmMyMS4zLTguNSw0Mi4xLTIzLjYsNDEuNy00Ny45IEMzMjMsNjguMiwzMDIuNiw3NC41LDI4Ni4zLDg2LjR6Ij48L3BhdGg+PHBhdGggZD0iTTQ4Ny44LDE2OC43Yy0xNC4yLTQ2LjktNDAuOS04OC4zLTgyLTExNS43QzM1OS41LDIyLDMwMC41LDE0LjUsMjQ2LDE4LjVjLTUxLjcsMy44LTEwNC42LDE3LjktMTQ4LjYsNDYgYy0yMS42LDEzLjgtNDAuOSwzMS45LTU1LDUzLjRjLTE0LjksMjIuNy0yMi41LDQ4LjgtMjYuNiw3NS40Yy0yLjMsMTUuMS0zLjQsMzAuMy00LjQsNDUuNmMtMC4xLDAuOSwwLjEsMS44LDAuNCwyLjYgYy0wLjksMC45LTEuNSwyLjItMS41LDMuOGMwLDMwLjEtMC42LDYwLjQsNC42LDkwLjJjNC44LDI3LjEsMTUuMiw1Mi45LDMxLjYsNzUuMWMyOS4yLDM5LjUsNzMuNSw2My4zLDEyMC40LDc1IGM4OC45LDIyLjIsMTk0LjIsMy43LDI2NC41LTU3LjFDNTA1LjUsMzY0LjQsNTE0LjcsMjU3LjYsNDg3LjgsMTY4Ljd6IE00MjMuNCw0MjEuMmMtNzAuOCw2MC40LTE3Ni45LDc2LTI2NC45LDUwLjggYy00Mi43LTEyLjItODEuOS0zNi42LTEwNy4yLTczLjdjLTMxLjEtNDUuNi0zMC4xLTEwMS0zMC4xLTE1My45YzAtMC4zLDAtMC41LTAuMS0wLjhjMC41LTAuNywwLjktMS42LDEtMi43IGMxLjctMjcsNC4xLTU0LjEsMTIuMS04MC4xYzcuOS0yNS45LDIzLjEtNDguMyw0Mi43LTY2LjhjMzcuMy0zNS4yLDg5LjgtNTMuMiwxMzkuNi02MS4xYzU1LjUtOC44LDExNS41LTYuNCwxNjYuNCwxOS4zIGM0NC42LDIyLjUsNzUuMSw2My4xLDkxLjMsMTA5LjZDNTA0LjMsMjQ4LjksNDk3LjUsMzU3LjksNDIzLjQsNDIxLjJ6Ij48L3BhdGg+PHBhdGggZD0iTTM5MS42LDE1OC4xYy05LjQtOS4xLTIxLjItMTYuMi0zMy42LTIwLjRjLTEyLjItNC4xLTI1LjEtNS0zNy44LTIuN2MtMTMuNCwyLjQtMjYuMSw4LTM4LjYsMTMuMSBjLTEyLjQsNS4xLTI0LjksOS43LTM4LjUsOS43Yy0xNC4xLDAtMjguNC01LjMtNDEuNi05LjZjLTEzLjEtNC4yLTI2LjUtNy43LTQwLjQtNi40Yy0xMC44LDEtMjEuNSw1LjYtMzAuMSwxMi4xIGMtMzAuOCwyMy4zLTI4LjMsNjguOS0yMi4xLDEwMi44YzcuMiwzOS41LDIxLjEsODAuNCw0OC41LDExMC42YzEzLjIsMTQuNiwzMC4xLDI1LDQ4LjgsMzAuNmMxMC42LDMuMiwyMS4zLDMuOSwzMi4zLDQuNyBjMTUuMSwxLjEsMzAuMSwzLjEsNDUuMiw0LjVjMTQuMiwxLjMsMjguNCwyLjEsNDIuNywxLjRjMTEuMi0wLjYsMjEuNy0xLjcsMzItNi40YzE5LjYtOC45LDMyLjYtMjYuOSw0My45LTQ0LjUgYzEuNy0yLjcsMC40LTUuMS0xLjgtNi4yYzEuNi0zLjktMy05LjEtNy41LTYuMWMtMy40LDIuMi05LjQtMi44LTExLjktNC43Yy00LjItMy4zLTguNS03LjgtMTAuNi0xMi44Yy0xLjItMi43LTMuMy01LTQuNi03LjcgYy0xLjMtMi43LTIuNy01LjMtNC42LTcuN2MtNC40LTUuOC0xMC41LTkuMS0xNS45LTEzLjhjLTctNi01LjUtMTQuNC00LjgtMjIuN2MwLjMtMy41LDAuMy02LjEtMS40LTkuMmMtMS4yLTIuMi0zLTQtNC02LjIgYy0yLjktNiwxLjktMTQuMSw1LjctMTguNWM0LjgtNS42LDExLjctOS40LDE4LjYtMTEuOGMyLjEtMC43LDMuNS0yLjksMy4zLTUuMWMtMS4zLTIwLDE2LjktMzQuMSwzNi4xLTMyLjcgYzIuMSwwLjIsMy43LTAuOCw0LjctMi4yYzEuNS0wLjQsMi44LTEuNiwzLjEtMy44QzQwOC40LDE3NC42LDM5OS40LDE2NS42LDM5MS42LDE1OC4xeiBNMzUyLjgsMjIyYy0xNC4zLDYtMjguMywxOC4zLTI4LjMsMzQuOSBjMCwzLjYsMSw2LjcsMi43LDkuOWMyLDMuNSwzLjgsNC43LDMuNSw5Yy0wLjcsMTAuMS0xLjcsMTkuNSw1LjUsMjcuNmM1LjMsNiwxMi44LDkuMiwxNy43LDE1LjdjNC4zLDUuNiw2LjcsMTIuNiwxMC43LDE4LjQgYzUuMSw3LjUsMTYuNSwxOC43LDI3LDE4LjNjLTExLjUsMTcuNS0yNS4yLDM0LjMtNDYuMSw0MC40Yy0xMi43LDMuNy0yNy40LDIuOS00MC40LDIuNGMtMTYtMC42LTMxLjktMi42LTQ3LjktNC4zIGMtMTMuMy0xLjQtMjYuOS0xLjUtNDAtNGMtMTAuNS0yLTIwLjQtNS45LTI5LjctMTEuMmMtMTguMS0xMC40LTMxLjUtMjcuMi00MS43LTQ1LjFjLTEwLjMtMTguMS0xNy40LTM4LjItMjIuNS01OC40IGMtNC42LTE4LTcuOC0zNi42LTguMi01NS4yYy0wLjMtMTcuNCwyLjUtMzYuMywxMy41LTUwLjNjNS42LTcuMiwxMy4yLTEyLjMsMjEuNy0xNS42YzEzLjUtNS4zLDI3LjYtMi44LDQxLjIsMSBjMTguOCw1LjMsMzcuMywxMy4xLDU3LjIsMTJjMTkuMi0xLDM2LjctMTAuOSw1NC41LTE3LjNjMTguOC02LjgsMzcuMy05LjEsNTYuMi0xLjRjOSwzLjcsMTcuOCw5LjIsMjQuNywxNS45IGM0LjUsNC40LDEyLjMsMTAuNiwxMi44LDE3LjZDMzc0LjEsMTgyLjQsMzUzLjQsMTk4LjQsMzUyLjgsMjIyeiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNTIuOCw2M2MtMC40LTMtMi42LTQuNC01LjQtNC42Yy0yNC41LTEuNC00OS42LDYuNy02OS4xLDIxLjVjLTksNi45LTE3LjcsMTUuOS0yMi44LDI2LjFjLTIuNSw1LjEtNC40LDEwLjUtNi45LDE1LjYgYy0xLjIsMi41LTIuOSw0LjMtNC4xLDYuNGMtMSwwLjktMS42LDIuMi0xLjYsMy44djEuOGMwLDQuOCw1LjYsNS42LDguNCwzYzUuMiw1LjksMTUuNSw0LjIsMjIuNiwyLjVjMTAuMy0yLjUsMjEtNywyOS45LTEyLjkgYzIuNi0xLjcsNS45LTIuNiw4LjctMy45YzMuMy0xLjUsNi41LTMuMyw5LjctNS4xYzYuNS0zLjgsMTIuNS04LjUsMTcuNy0xNEMzNTAuMSw5Mi4zLDM1NC42LDc3LjgsMzUyLjgsNjN6IE0zMDEuNSwxMTYuMiBjLTMuMywxLjMtNi4yLDMuNS05LjMsNS4yYy00LjMsMi4yLTguOCw0LTEzLjMsNS43Yy00LjUsMS42LTkuMSwzLTEzLjksMy42Yy0yLDAuMi01LjksMC40LTYuNC0wLjljLTAuNC0xLTEtMS44LTEuOC0yLjMgYzMuMi01LjgsNS4zLTEyLjMsOC4zLTE4LjNjNC41LTksMTMuMi0xNi45LDIxLjItMjIuOGMxNi4zLTExLjksMzYuNy0xOC4zLDU2LjgtMTguMkMzNDMuNiw5Mi42LDMyMi43LDEwNy42LDMwMS41LDExNi4yeiI+PC9wYXRoPjwvc3ZnPg=="/>                            </Col>
                                    
                                    <Col xs={4} md={4}>
                                        <Card.Title>AAPL</Card.Title>
                                        <Col >                    
                                            <Card.Subtitle className="mb-2 text-muted">Apple</Card.Subtitle>
                                        </Col>
                                    </Col>
                                    <Col xs={5} md={5} className= 'porcetagemN'> -0.12% <MdTrendingUp/>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                    </Row>

                </Carousel.Item>

                <Carousel.Item>
                  
                   <Row xs={12} md={12}>
                        <Card className='borda card-empresas-recentes'style={{ width: '20rem' }}>
                            <Card.Body>
                                <Row xs={12} md={12}>

                                    <Col xs={3} md={3}>
                                        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzNjNWE5YSI+PHBhdGggZD0iTTg2LDEwLjMyYy00MS43OTYsMCAtNzUuNjgsMzMuODg0IC03NS42OCw3NS42OGMwLDM3Ljk0MzIgMjcuOTUsNjkuMjcxMjggNjQuMzY5MjgsNzQuNzQ0MzJ2LTU0LjY4NTY4aC0xOC43MjM5MnYtMTkuODkzNTJoMTguNzIzOTJ2LTEzLjIzNzEyYzAsLTIxLjkxNjI0IDEwLjY3Nzc2LC0zMS41Mzc5MiAyOC44OTI1NiwtMzEuNTM3OTJjOC43MjM4NCwwIDEzLjMzNjg4LDAuNjQ2NzIgMTUuNTIxMjgsMC45NDI1NnYxNy4zNjUxMmgtMTIuNDI1MjhjLTcuNzMzMTIsMCAtMTAuNDMzNTIsNy4zMzA2NCAtMTAuNDMzNTIsMTUuNTkzNTJ2MTAuODczODRoMjIuNjYyNzJsLTMuMDc1MzYsMTkuODkzNTJoLTE5LjU4NzM2djU0Ljg0NzM2YzM2LjkzODcyLC01LjAxMjA4IDY1LjQzNTY4LC0zNi41OTQ3MiA2NS40MzU2OCwtNzQuOTA2YzAsLTQxLjc5NiAtMzMuODg0LC03NS42OCAtNzUuNjgsLTc1LjY4eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/>                            
                                    </Col>

                                    <Col xs={4} md={4}>

                                        <Card.Title>FB</Card.Title>
                                        
                                        <Col>                    
                                            <Card.Subtitle className=" text-muted">Facebook</Card.Subtitle>
                                        </Col>

                                    </Col>

                                    <Col xs={5} md={5}className= 'porcetagemP'>
                                        +2.3%<MdTrendingUp/>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='borda card-empresas-recentes'>
                            <Card.Body>
                                <Row xs={12} md={12}>
                                    
                                    <Col xs={3} md={3}>
                                        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA1MTIgNTEyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGZpbGw9IiNCQ0JDQkMiIGQ9Ik00NzQuMiwxNjEuN2MtMTYuMS00Ni42LTQ2LjctODcuMS05MS4zLTEwOS42Yy01MC45LTI1LjctMTExLTI4LjEtMTY2LjQtMTkuMyBDMTY2LjcsNDAuOCwxMTQuMiw1OC44LDc2LjksOTRjLTE5LjYsMTguNS0zNC43LDQwLjktNDIuNyw2Ni44Yy04LDI2LTEwLjQsNTMuMS0xMi4xLDgwLjFjLTAuMSwxLjEtMC40LDItMSwyLjcgYzAsMC4yLDAuMSwwLjUsMC4xLDAuOGMwLDUyLjktMS4xLDEwOC4zLDMwLjEsMTUzLjljMjUuMywzNy4xLDY0LjUsNjEuNSwxMDcuMiw3My43Yzg4LDI1LjIsMTk0LjIsOS42LDI2NC45LTUwLjggQzQ5Ny41LDM1Ny45LDUwNC4zLDI0OC45LDQ3NC4yLDE2MS43eiBNMjQyLjksMTMxLjhjMC0xLjYsMC43LTIuOSwxLjYtMy44YzEuMi0yLjEsMi45LTMuOSw0LjEtNi40YzIuNS01LjEsNC40LTEwLjUsNi45LTE1LjYgYzUuMS0xMC4yLDEzLjgtMTkuMiwyMi44LTI2LjFjMTkuNS0xNC44LDQ0LjYtMjIuOSw2OS4xLTIxLjVjMi44LDAuMiw1LDEuNiw1LjQsNC42YzEuOCwxNC44LTIuNywyOS4zLTEzLDQwLjIgYy01LjIsNS41LTExLjIsMTAuMi0xNy43LDE0Yy0zLjIsMS44LTYuNCwzLjYtOS43LDUuMWMtMi44LDEuMy02LjIsMi4yLTguNywzLjljLTguOSw1LjktMTkuNiwxMC40LTI5LjksMTIuOSBjLTcuMiwxLjctMTcuNCwzLjUtMjIuNi0yLjVjLTIuOCwyLjYtOC40LDEuOC04LjQtM1YxMzEuOHogTTQwNi43LDE4Ni40Yy0wLjMsMi4xLTEuNiwzLjMtMy4xLDMuOGMtMSwxLjQtMi42LDIuNC00LjcsMi4yIGMtMTkuMi0xLjQtMzcuMywxMi43LTM2LjEsMzIuN2MwLjEsMi4yLTEuMiw0LjQtMy4zLDUuMWMtNi45LDIuNC0xMy44LDYuMi0xOC42LDExLjhjLTMuOCw0LjQtOC42LDEyLjUtNS43LDE4LjUgYzEuMSwyLjIsMi44LDQuMSw0LDYuMmMxLjcsMy4xLDEuNyw1LjcsMS40LDkuMmMtMC42LDguMi0yLjIsMTYuNyw0LjgsMjIuN2M1LjQsNC42LDExLjUsOCwxNS45LDEzLjhjMS45LDIuNCwzLjIsNSw0LjYsNy43IGMxLjMsMi43LDMuNCw1LDQuNiw3LjdjMi4yLDUsNi40LDkuNCwxMC42LDEyLjhjMi40LDEuOSw4LjUsNywxMS45LDQuN2M0LjUtMi45LDkuMSwyLjMsNy41LDYuMWMyLjIsMS4xLDMuNiwzLjUsMS44LDYuMiBjLTExLjMsMTcuNi0yNC40LDM1LjUtNDMuOSw0NC41Yy0xMC4zLDQuNy0yMC44LDUuOS0zMiw2LjRjLTE0LjIsMC43LTI4LjUtMC4xLTQyLjctMS40Yy0xNS4xLTEuNC0zMC4xLTMuNC00NS4yLTQuNSBjLTExLTAuOC0yMS43LTEuNS0zMi4zLTQuN2MtMTguOC01LjctMzUuNi0xNi4xLTQ4LjgtMzAuNmMtMjcuNC0zMC4yLTQxLjMtNzEuMS00OC41LTExMC42Yy02LjItMzMuOC04LjctNzkuNSwyMi4xLTEwMi44IGM4LjYtNi41LDE5LjMtMTEuMSwzMC4xLTEyLjFjMTMuOS0xLjMsMjcuMywyLjMsNDAuNCw2LjRjMTMuMiw0LjIsMjcuNSw5LjYsNDEuNiw5LjZjMTMuNiwwLDI2LjEtNC42LDM4LjUtOS43IGMxMi41LTUuMSwyNS4yLTEwLjcsMzguNi0xMy4xYzEyLjctMi4yLDI1LjYtMS40LDM3LjgsMi43YzEyLjQsNC4yLDI0LjIsMTEuMywzMy42LDIwLjRDMzk5LjQsMTY1LjYsNDA4LjQsMTc0LjYsNDA2LjcsMTg2LjR6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0Q2RTVFNSIgZD0iTTM2NC42LDMzNy40Yy00LTUuOC02LjQtMTIuOC0xMC43LTE4LjRjLTUtNi40LTEyLjQtOS43LTE3LjctMTUuN2MtNy4yLTguMS02LjMtMTcuNS01LjUtMjcuNiBjMC4zLTQuMy0xLjUtNS41LTMuNS05Yy0xLjgtMy4xLTIuNy02LjItMi43LTkuOWMwLTE2LjYsMTQtMjguOSwyOC4zLTM0LjljMC42LTIzLjYsMjEuMy0zOS42LDQ0LjItMzkuNiBjLTAuNS03LTguMy0xMy4yLTEyLjgtMTcuNmMtNi45LTYuOC0xNS44LTEyLjMtMjQuNy0xNS45Yy0xOC45LTcuNy0zNy41LTUuNC01Ni4yLDEuNGMtMTcuOCw2LjUtMzUuMywxNi4zLTU0LjUsMTcuMyBjLTE5LjksMS4xLTM4LjQtNi43LTU3LjItMTJjLTEzLjUtMy44LTI3LjYtNi4yLTQxLjItMWMtOC40LDMuMy0xNi4xLDguNC0yMS43LDE1LjZjLTExLDE0LjEtMTMuOCwzMi45LTEzLjUsNTAuMyBjMC4zLDE4LjcsMy42LDM3LjIsOC4yLDU1LjJjNS4xLDIwLjIsMTIuMiw0MC4yLDIyLjUsNTguNGMxMC4yLDE3LjksMjMuNywzNC42LDQxLjcsNDUuMWM5LjIsNS4zLDE5LjIsOS4yLDI5LjcsMTEuMiBjMTMuMiwyLjYsMjYuNywyLjYsNDAsNGMxNS45LDEuNywzMS45LDMuNyw0Ny45LDQuM2MxMy4xLDAuNSwyNy43LDEuMiw0MC40LTIuNGMyMC45LTYuMSwzNC42LTIyLjksNDYuMS00MC40IEMzODEuMiwzNTYuMSwzNjkuOCwzNDQuOSwzNjQuNiwzMzcuNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRDZFNUU1IiBkPSJNMjg2LjMsODYuNGMtOCw1LjktMTYuNywxMy43LTIxLjIsMjIuOGMtMyw1LjktNS4xLDEyLjQtOC4zLDE4LjNjMC43LDAuNSwxLjQsMS4zLDEuOCwyLjMgYzAuNSwxLjIsNC40LDEuMSw2LjQsMC45YzQuOC0wLjYsOS40LTEuOSwxMy45LTMuNmM0LjUtMS42LDktMy41LDEzLjMtNS43YzMuMS0xLjYsNi0zLjgsOS4zLTUuMmMyMS4zLTguNSw0Mi4xLTIzLjYsNDEuNy00Ny45IEMzMjMsNjguMiwzMDIuNiw3NC41LDI4Ni4zLDg2LjR6Ij48L3BhdGg+PHBhdGggZD0iTTQ4Ny44LDE2OC43Yy0xNC4yLTQ2LjktNDAuOS04OC4zLTgyLTExNS43QzM1OS41LDIyLDMwMC41LDE0LjUsMjQ2LDE4LjVjLTUxLjcsMy44LTEwNC42LDE3LjktMTQ4LjYsNDYgYy0yMS42LDEzLjgtNDAuOSwzMS45LTU1LDUzLjRjLTE0LjksMjIuNy0yMi41LDQ4LjgtMjYuNiw3NS40Yy0yLjMsMTUuMS0zLjQsMzAuMy00LjQsNDUuNmMtMC4xLDAuOSwwLjEsMS44LDAuNCwyLjYgYy0wLjksMC45LTEuNSwyLjItMS41LDMuOGMwLDMwLjEtMC42LDYwLjQsNC42LDkwLjJjNC44LDI3LjEsMTUuMiw1Mi45LDMxLjYsNzUuMWMyOS4yLDM5LjUsNzMuNSw2My4zLDEyMC40LDc1IGM4OC45LDIyLjIsMTk0LjIsMy43LDI2NC41LTU3LjFDNTA1LjUsMzY0LjQsNTE0LjcsMjU3LjYsNDg3LjgsMTY4Ljd6IE00MjMuNCw0MjEuMmMtNzAuOCw2MC40LTE3Ni45LDc2LTI2NC45LDUwLjggYy00Mi43LTEyLjItODEuOS0zNi42LTEwNy4yLTczLjdjLTMxLjEtNDUuNi0zMC4xLTEwMS0zMC4xLTE1My45YzAtMC4zLDAtMC41LTAuMS0wLjhjMC41LTAuNywwLjktMS42LDEtMi43IGMxLjctMjcsNC4xLTU0LjEsMTIuMS04MC4xYzcuOS0yNS45LDIzLjEtNDguMyw0Mi43LTY2LjhjMzcuMy0zNS4yLDg5LjgtNTMuMiwxMzkuNi02MS4xYzU1LjUtOC44LDExNS41LTYuNCwxNjYuNCwxOS4zIGM0NC42LDIyLjUsNzUuMSw2My4xLDkxLjMsMTA5LjZDNTA0LjMsMjQ4LjksNDk3LjUsMzU3LjksNDIzLjQsNDIxLjJ6Ij48L3BhdGg+PHBhdGggZD0iTTM5MS42LDE1OC4xYy05LjQtOS4xLTIxLjItMTYuMi0zMy42LTIwLjRjLTEyLjItNC4xLTI1LjEtNS0zNy44LTIuN2MtMTMuNCwyLjQtMjYuMSw4LTM4LjYsMTMuMSBjLTEyLjQsNS4xLTI0LjksOS43LTM4LjUsOS43Yy0xNC4xLDAtMjguNC01LjMtNDEuNi05LjZjLTEzLjEtNC4yLTI2LjUtNy43LTQwLjQtNi40Yy0xMC44LDEtMjEuNSw1LjYtMzAuMSwxMi4xIGMtMzAuOCwyMy4zLTI4LjMsNjguOS0yMi4xLDEwMi44YzcuMiwzOS41LDIxLjEsODAuNCw0OC41LDExMC42YzEzLjIsMTQuNiwzMC4xLDI1LDQ4LjgsMzAuNmMxMC42LDMuMiwyMS4zLDMuOSwzMi4zLDQuNyBjMTUuMSwxLjEsMzAuMSwzLjEsNDUuMiw0LjVjMTQuMiwxLjMsMjguNCwyLjEsNDIuNywxLjRjMTEuMi0wLjYsMjEuNy0xLjcsMzItNi40YzE5LjYtOC45LDMyLjYtMjYuOSw0My45LTQ0LjUgYzEuNy0yLjcsMC40LTUuMS0xLjgtNi4yYzEuNi0zLjktMy05LjEtNy41LTYuMWMtMy40LDIuMi05LjQtMi44LTExLjktNC43Yy00LjItMy4zLTguNS03LjgtMTAuNi0xMi44Yy0xLjItMi43LTMuMy01LTQuNi03LjcgYy0xLjMtMi43LTIuNy01LjMtNC42LTcuN2MtNC40LTUuOC0xMC41LTkuMS0xNS45LTEzLjhjLTctNi01LjUtMTQuNC00LjgtMjIuN2MwLjMtMy41LDAuMy02LjEtMS40LTkuMmMtMS4yLTIuMi0zLTQtNC02LjIgYy0yLjktNiwxLjktMTQuMSw1LjctMTguNWM0LjgtNS42LDExLjctOS40LDE4LjYtMTEuOGMyLjEtMC43LDMuNS0yLjksMy4zLTUuMWMtMS4zLTIwLDE2LjktMzQuMSwzNi4xLTMyLjcgYzIuMSwwLjIsMy43LTAuOCw0LjctMi4yYzEuNS0wLjQsMi44LTEuNiwzLjEtMy44QzQwOC40LDE3NC42LDM5OS40LDE2NS42LDM5MS42LDE1OC4xeiBNMzUyLjgsMjIyYy0xNC4zLDYtMjguMywxOC4zLTI4LjMsMzQuOSBjMCwzLjYsMSw2LjcsMi43LDkuOWMyLDMuNSwzLjgsNC43LDMuNSw5Yy0wLjcsMTAuMS0xLjcsMTkuNSw1LjUsMjcuNmM1LjMsNiwxMi44LDkuMiwxNy43LDE1LjdjNC4zLDUuNiw2LjcsMTIuNiwxMC43LDE4LjQgYzUuMSw3LjUsMTYuNSwxOC43LDI3LDE4LjNjLTExLjUsMTcuNS0yNS4yLDM0LjMtNDYuMSw0MC40Yy0xMi43LDMuNy0yNy40LDIuOS00MC40LDIuNGMtMTYtMC42LTMxLjktMi42LTQ3LjktNC4zIGMtMTMuMy0xLjQtMjYuOS0xLjUtNDAtNGMtMTAuNS0yLTIwLjQtNS45LTI5LjctMTEuMmMtMTguMS0xMC40LTMxLjUtMjcuMi00MS43LTQ1LjFjLTEwLjMtMTguMS0xNy40LTM4LjItMjIuNS01OC40IGMtNC42LTE4LTcuOC0zNi42LTguMi01NS4yYy0wLjMtMTcuNCwyLjUtMzYuMywxMy41LTUwLjNjNS42LTcuMiwxMy4yLTEyLjMsMjEuNy0xNS42YzEzLjUtNS4zLDI3LjYtMi44LDQxLjIsMSBjMTguOCw1LjMsMzcuMywxMy4xLDU3LjIsMTJjMTkuMi0xLDM2LjctMTAuOSw1NC41LTE3LjNjMTguOC02LjgsMzcuMy05LjEsNTYuMi0xLjRjOSwzLjcsMTcuOCw5LjIsMjQuNywxNS45IGM0LjUsNC40LDEyLjMsMTAuNiwxMi44LDE3LjZDMzc0LjEsMTgyLjQsMzUzLjQsMTk4LjQsMzUyLjgsMjIyeiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNTIuOCw2M2MtMC40LTMtMi42LTQuNC01LjQtNC42Yy0yNC41LTEuNC00OS42LDYuNy02OS4xLDIxLjVjLTksNi45LTE3LjcsMTUuOS0yMi44LDI2LjFjLTIuNSw1LjEtNC40LDEwLjUtNi45LDE1LjYgYy0xLjIsMi41LTIuOSw0LjMtNC4xLDYuNGMtMSwwLjktMS42LDIuMi0xLjYsMy44djEuOGMwLDQuOCw1LjYsNS42LDguNCwzYzUuMiw1LjksMTUuNSw0LjIsMjIuNiwyLjVjMTAuMy0yLjUsMjEtNywyOS45LTEyLjkgYzIuNi0xLjcsNS45LTIuNiw4LjctMy45YzMuMy0xLjUsNi41LTMuMyw5LjctNS4xYzYuNS0zLjgsMTIuNS04LjUsMTcuNy0xNEMzNTAuMSw5Mi4zLDM1NC42LDc3LjgsMzUyLjgsNjN6IE0zMDEuNSwxMTYuMiBjLTMuMywxLjMtNi4yLDMuNS05LjMsNS4yYy00LjMsMi4yLTguOCw0LTEzLjMsNS43Yy00LjUsMS42LTkuMSwzLTEzLjksMy42Yy0yLDAuMi01LjksMC40LTYuNC0wLjljLTAuNC0xLTEtMS44LTEuOC0yLjMgYzMuMi01LjgsNS4zLTEyLjMsOC4zLTE4LjNjNC41LTksMTMuMi0xNi45LDIxLjItMjIuOGMxNi4zLTExLjksMzYuNy0xOC4zLDU2LjgtMTguMkMzNDMuNiw5Mi42LDMyMi43LDEwNy42LDMwMS41LDExNi4yeiI+PC9wYXRoPjwvc3ZnPg=="/>                            </Col>
                                    
                                    <Col xs={4} md={4}>
                                        <Card.Title>AAPL</Card.Title>
                                        <Col >                    
                                            <Card.Subtitle className="mb-2 text-muted">Apple</Card.Subtitle>
                                        </Col>
                                    </Col>
                                    <Col xs={5} md={5} className= 'porcetagemN'> -0.12% <MdTrendingUp/>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                    </Row>

                </Carousel.Item>

                <Carousel.Item>
                  


                </Carousel.Item>
            </Carousel>
            </Row>

        </>

        );
      }
    }  
    export default Lateral;
