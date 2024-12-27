const celciusInput = document.getElementById("celcius")
//สร้างตัวแปลเพื่อนำข้อมูลจากเอลสเมลนั้นๆมาเพื่อไปคำนวณ
const fahrenheitInput = document.getElementById("fahrenheit")
const kelvinInput = document.getElementById("kelvin")
const tempInputs = document.querySelectorAll("input")
//ตรวจสอบว่ามีการป้อนข้อมูลเข้ามารึป่าว โดยการตรวจไปเรื้อยๆ
tempInputs.forEach(input => {  
    input.addEventListener("input",(e)=>{   
        //ตัวเลขที่ป้อนเข้ามา และให้เป็นจำนวนเต็ม
        let tempValue = parseInt(e.target.value)
        //ชื่อหน่วยอุณหภูมิ ที่สนใจ
        let inputName = e.target.name

        //เมื่อยังไม่มีการใส่ข้ออะไรลงช่องจะปล่อยค่าว่าง
        if(e.target.value === ""){
            celciusInput.value = null
            fahrenheitInput.value = null
            kelvinInput.value = null
            return
        }
        //ดูว่าชื่อตรงกับ ช่อง name ช่องไหน
        if(inputName === "celcius"){
                            //นำตัวเลขที่รับไปคำนวณตามสูตร
            let fahrenheit = tempValue *1.8 +32
            fahrenheitInput.value = fahrenheit.toFixed(2)
            //นำข้อความไปแสดงผ้านตัวนี้

            let kelvin = tempValue +273
            kelvinInput.value = kelvin.toFixed(2)

        }else if(inputName === "fahrenheit"){
            let celcius = (tempValue-32)/1.8
            celciusInput.value = celcius.toFixed(2)

            let kelvin = (tempValue-32)/1.8+273
            kelvinInput.value = kelvin.toFixed(2)

        }else if(inputName === "kelvin"){
            let celcius = tempValue -273
            celciusInput.value = celcius.toFixed(2)

            let fahrenheit = (tempValue-273)*1.8 +32
            fahrenheitInput.value = fahrenheit.toFixed(2)
        }

        
    })
});