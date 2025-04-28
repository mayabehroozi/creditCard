// const card = document.getElementById('card');

//         const cvvInput = document.getElementById('cvvMainInput');

//         cvvInput.addEventListener('focus', () => {
//             card.classList.add('rotate-card');
//         });

//         cvvInput.addEventListener('blur', () => {
//             card.classList.remove('rotate-card');
//         });



//         // const numinp=document.querySelectorAll('.numinp>input')
//         // const pcardnumber=document.getElementsByClassName('pcardnumber')
//         // const holdername=document.getElementsByClassName('holdername')
//         // const validtill=document.getElementsByClassName('validtill')




// const numinp = document.querySelectorAll('.numinp > input');
// const pcardnumber = document.getElementsByClassName('pcardnumber')[0];
// const holdername = document.getElementsByClassName('holdername')[0];
// const validtill = document.getElementsByClassName('validtill')[0];

// //////////////////
// numinp.forEach((val, i) => {
//     val.addEventListener('keyup', () => {
//         if (val.value.length > 4) {
//             val.value = val.value.slice(0, 4);
//         }

//         if (val.value.length === 4 && i < numinp.length - 1) {
//             numinp[i + 1].focus();
//         }

//         if (val.value.length === 0 && i > 0) {
//             numinp[i - 1].focus();
//         }

//         ///////// write number //////
//         let temp = '';
//         numinp.forEach((item, index) => {
//             temp += item.value;
//             if (index !== numinp.length - 1) {
//                 temp += ' - ';
//             }
//         });

//         pcardnumber.innerHTML = temp;
//     });
// });


//         //////////////////
//         // numinp.forEach((val ,i)=>{

//         //     val.addEventListener('keyup',()=>{
//         //         if(val.value.length>3){
//         //             val.value=val.value.slice(0,4)
//         //             if(i<3){
//         //                 val.nextElementSibling.focus()
//         //             }else{
//         //                 holdername.focus()
//         //             }else if(val.value.length==0&&i!=0){
//         //                 val.previousElementSibling.focus()
//         //             }
//         //             //////////writenumber////
//         //             let temp=''
//         //             numinp.forEach((item)=>{
//         //                 if(item.value.length > 3){
//         //                     temp += item.value + ' - '
//         //                 }else{
//         //                     temp += item.value
//         //                 }
//         //             })
//         //             pcardnumber.innerHTML=temp.length<25?temp:temp.slice(0,25)
        

//         //             })
//         //         }
//         //     })

//         // })
// از اینجا/
// گرفتن عناصر
const card = document.getElementById('card');
const cvvInput = document.getElementById('cvvInput'); // روی کارت پشت
const cvvMainInput = document.getElementById('cvvMainInput'); // توی فرم
const numinp = document.querySelectorAll('.numinp > input');
const inpname = document.querySelector('.inpname');
const pcardnumber = document.querySelector('.pcardnumber');
const holdername = document.querySelector('.holdername');
const validtill = document.querySelector('.validtill');
const validtillInput = document.querySelector('.inputs input[type="text"]:nth-of-type(6)');

// چرخش کارت برای CVV
cvvMainInput.addEventListener('focus', () => {
    card.classList.add('rotate-card');
});
cvvMainInput.addEventListener('blur', () => {
    card.classList.remove('rotate-card');
});

// کپی مقدار از cvvMainInput به cvvInput (پشت کارت)
cvvMainInput.addEventListener('input', () => {
    // فقط اجازه وارد کردن 3 رقم
    if (cvvMainInput.value.length > 3) {
        cvvMainInput.value = cvvMainInput.value.slice(0, 3); // کوتاه کردن به 3 رقم
    }

    cvvInput.value = cvvMainInput.value; // کپی کردن به کارت پشت
});

// پر کردن شماره کارت
numinp.forEach((val, i) => {
    val.addEventListener('keyup', () => {
        if (val.value.length > 4) {
            val.value = val.value.slice(0, 4);
        }

        if (val.value.length === 4 && i < numinp.length - 1) {
            numinp[i + 1].focus();
        }

        if (val.value.length === 4 && i === numinp.length - 1) {
            inpname.focus();
        }

        if (val.value.length === 0 && i > 0) {
            numinp[i - 1].focus();
        }

        // نوشتن شماره کارت روی کارت
        let temp = '';
        numinp.forEach((item, index) => {
            temp += item.value;
            if (index !== numinp.length - 1) {
                temp += ' - ';
            }
        });
        pcardnumber.innerHTML = temp;
    });
});

// پر کردن اسم دارنده کارت
inpname.addEventListener('input', () => {
    holdername.innerHTML = inpname.value;
});

// انتقال فوکوس بعد از اسم دارنده کارت به تاریخ انقضا
inpname.addEventListener('keyup', () => {
    if (inpname.value.length >= 2) {
        validtillInput.focus();
    }
});

// نوشتن تاریخ انقضا روی کارت
validtillInput.addEventListener('input', () => {
    validtill.innerHTML = validtillInput.value;
});
