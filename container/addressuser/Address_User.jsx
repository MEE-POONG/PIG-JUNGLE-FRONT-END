import React from "react"
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button, Image, Row, Col, NavbarBrand } from 'react-bootstrap';

export default function AddressUser() {
    return (
        <>
            <div className="box-Container-address">
                <div className='Container-address'>
                    <h2 className='title-Si-Su-Ad'>Address</h2>
                    <form>

                        <div className="box-address-left">
                            <label className="text-Ad">ชื่อ - สกุล</label>
                            <input className='input-address' type="text" id="Name" name="Name" placeholder="ชื่อ - สกุล" />
                            <label className="text-Ad">หมายเลขโทรศัพท์</label>
                            <input className='input-address' type="text" id="Phone" name="Phone" placeholder="โปรดป้อนหมายเลขโทรศัพท์ของคุณ" />
                        </div>
                        <div className="box-address-right">
                            <label className="text-Ad">ที่อยู่</label>
                            <input className='input-address' type="text" id="Address" name="Address" placeholder="กรุณาระบุที่อยู่ (บ้านเลขที่,ถนน,ตำบล)" />
                            <label className="text-Ad">จังหวัด</label>
                            <input className='input-address' type="text" id="Password" name="Password" placeholder="จังหวัด" />
                            <label className="text-Ad">เขต/อำเภอ</label>
                            <input className='input-address' type="text" id="ConfirmPassword" name="ConfirmPassword" placeholder="กรุณาเลือกเขต/อำเภอ" />
                            <label className="text-Ad">รหัสไปรษณีย์</label>
                            <input className='input-address' type="text" id="ConfirmPassword" name="ConfirmPassword" placeholder="รหัสไปรษณีย์" />
                        </div>
                    </form>

                    <div className="box-btu-address">

                        <a className="btu-Si-Su-Ad" type='address-up' href="/">ยกเลิก</a>

                        <a className="btu-Si-Su-Ad" type='submit'>บันทึก</a>

                    </div>
                </div>

            </div>
        </>
    )
}

