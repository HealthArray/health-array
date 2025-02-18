import React, { useState } from 'react';
import {
    Button,
    createTheme,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    ThemeProvider,
} from '@mui/material';
import Navbar from '../components/Navbar';

const InsulinCalculator = () => {
    const [w, setW] = useState(null);
    const [bg, setBg] = useState(null);
    const [tbg, setTbg] = useState(90);
    const [cc, setCc] = useState(null);
    const [dose, setDose] = useState(null);

    const handleClick = () => {
        const tdd = w * 0.55
        const x = 1500 / tdd
        const cf = Math.abs(bg - tbg) / x
        const y = 500 / tdd
        const ci = cc / y
        setDose(Math.round(cf + ci) + ' Units');
    }

    return (
        <div className={'page'}>
            <Navbar />
            <div className={'title'}>
                Insulin Calculator
            </div>

            <div
                className='form'
            >
                <TextField
                    value={w}
                    type='number'
                    label={'Body Weight'}
                    onChange={
                        (e) => {
                            setW(e.target.value);
                        }
                    }
                />
                <TextField
                    value={bg}
                    type='number'
                    label={'Blood Glucose'}
                    onChange={
                        (e) => {
                            setBg(e.target.value);
                        }
                    }
                />
                <TextField
                    value={tbg}
                    type='number'
                    label={'Taregt Blood Glucose'}
                    onChange={
                        (e) => {
                            setTbg(e.target.value);
                        }
                    }
                />
                <TextField
                    value={cc}
                    type='number'
                    label={'Carbohydrate Content'}
                    onChange={
                        (e) => {
                            setCc(e.target.value);
                        }
                    }
                />
                <button
                    name='Submit'
                    onClick={handleClick}
                >
                    Calculate
                </button>
                <div
                    className='result' 
                >
                    {dose}
                </div>
            </div>
        </div>
    )
}

export default InsulinCalculator