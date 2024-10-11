import { useState } from "react"

const TempratureConverter = () => {
    const [celciusValue, setCelciusValue] = useState()
    const [FValue, setFValue] = useState()

    const calculateCtoF = (value) => {
        const conversion = (value * 9 / 5) + 32
        if (conversion % 1 !== 0) {
            return conversion.toFixed(4)
        }
        return conversion
    }

    const calculateFtoC = (value) => {
        const conversion = (value - 32) * 5 / 9

        if (conversion % 1 !== 0) {
            return conversion.toFixed(4)
        }
        return conversion
    }

    const handleCelciusChange = (e) => {
        const value = e.target.value
        setCelciusValue(value)
       
            const convertedValue = calculateCtoF(value)
            setFValue(convertedValue)
    }

    const handleFahrenhietChange = (e) => {
            const value = e.target.value
        setFValue(value)
        const convertedValue = calculateFtoC(value)
        setCelciusValue(convertedValue)
    }

    return <div style={{ display: 'flex', gap: '10px' }}>
        <div>
            <input type="number" name="celcius" id="celcius" value={celciusValue} onChange={handleCelciusChange} />
            <br />
            <label htmlFor="celcius">Celcius</label>
        </div>
        =
        <div>
            <input type="number" name="celcius" id="celcius" value={FValue} onChange={handleFahrenhietChange} />
            <br />
            <label htmlFor="celcius">Fahrenheit</label>
        </div>
    </div>
}

export default TempratureConverter