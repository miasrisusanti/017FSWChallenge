import React, { useState, useContext } from 'react';
import '../App.css'
import { Container, Col, Button, Row, Form } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Select, {components} from "react-select";
import { CarContext } from '../context/CarContext';
import { FilterContext } from '../context/FilterContext';

const SearchBar = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [passenger, setPassenger] = useState("");
    const [filterCar, setFilterCar] = useContext(FilterContext);
    const cars = useContext(CarContext);

    const brandColor = '#5CB85F';

    const tipeDriverOptions = [
        { value: "dengan-sopir", label: "Dengan Sopir" },
        { value: "tanpa-sopir", label: "Tanpa Sopir (Lepas Kunci)" },
    ];
    
    const timeOptions = [
        { value: "08:00:00", label: "08:00 WIB" },
        { value: "09:00:00", label: "09:00 WIB" },
        { value: "10:00:00", label: "10:00 WIB" },
        { value: "11:00:00", label: "11:00 WIB" },
        { value: "12:00:00", label: "12:00 WIB" },
    ];

    const style = {
        control: (base, state) => ({
            ...base,
            boxShadow: state.isFocused ? 0 : 0,
            borderColor: state.isFocused
            ? brandColor
            : base.borderColor,
            '&:hover': {
                borderColor: brandColor
            }
        }),
        option: (base, state) => {
            return {
                ...base,
                backgroundColor: state.isFocused ? "#C9E7CA" : "white",
                color: state.isFocused ? "#5CB85F" : "black",
                fontWeight: state.isFocused ? "500" : "normal"
            };
        }
    };
    
    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
            </components.DropdownIndicator>
            );
        };

        const onSubmit =  () => {
            const fullDateTime = new Date(`${date} ${time}`);
            const condition = (i) => i.available && i.capacity >= passenger && new Date(i.availableAt).getTime() >= fullDateTime;
            setFilterCar(cars.filter(condition))
        }

        const onClear =  () => {
            setDate("");
            setTime("");
            setPassenger("");
            setFilterCar(null)
        }

    return (
    <section className="rent-car">
        <Container style={{ zIndex: 3, position: "relative", top: "-50px", left: "-70px" }}>
            <Row className="front-box justify-content-center">
                <Col className="tipe-driver">
                    <div className="box-size">
                        <div className="mb-2">Tipe Driver</div>
                            <Select
                            options={tipeDriverOptions}
                            placeholder="Pilih Tipe Driver"
                            styles={style}
                                />
                            </div>
                        </Col>
                        <Col className="tanggal">
                            <div className="box-size">
                                <div className="mb-2">Tanggal</div>
                                    <input type="date"
                                    className="tanggal-input-box px-2"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    >
                                    </input>
                            </div>
                        </Col>
                        <Col className="waktu">
                            <div className="box-size">
                                <div className="mb-2">Waktu Jemput/Ambil</div>
                                <Select
                                    options={timeOptions}
                                    components={{ DropdownIndicator }}
                                    placeholder="Pilih Waktu"
                                    styles={style}
                                    value={{ value: time, label: time }}
                                    onChange={(selectedOption) => setTime(selectedOption.value)}
                                />
                            </div>
                        </Col>
                        <Col className="penumpang">
                            <div className="box-size">
                                <div className="mb-2">Jumlah Penumpang</div>
                                <Form.Control
                                className="pass-input-box"
                                placeholder="Jumlah Penumpang"
                                type="text"
                                style={{ boxShadow: 'none', border: '1px solid #D0D0D0' }}
                                value={passenger}
                                onChange={(e) => setPassenger(e.target.value)}
                            />
                            </div>
                        </Col>
                        <Col className="cari-button">
                            <div className="mb-2" />
                            <Button
                            type="button"
                            onClick={onSubmit}
                            id="load-btn"
                            className="btn mt-4 text-light no-border"
                            style={{ backgroundColor: "#5CB85F"}}
                            >
                                Search
                            </Button>
                        </Col>
                        <Col className="hapus-button">
                            <div className="mb-2" />
                            <Button
                            type="button"
                            onClick={onClear}
                            id="clear-btn"
                            className="btn mt-4 text-light no-border"
                            style={{ backgroundColor: "#b85c5c" }}
                            >
                            Clear
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }


export default SearchBar;