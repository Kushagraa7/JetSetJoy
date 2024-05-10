@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
    text-transform: capitalize;
    transition: all 0.2s linear;
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 25px;
    background: #73B5BD;
}

.container form {
    width: 700px;
    padding: 20px;
    background: #fff;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
}

.container form .row{
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.container form .row .col{
    flex: 1 1 250px;
}

.col .title{
    font-size: 20px;
    color: #5e8f94;
    padding-bottom: 5px;
}

.col .inputBox{
    margin: 15px 0;
}

.col .inputBox label{
    margin-bottom: 10px;
    display: block;
}

.col .inputBox input, .col .inputBox select{
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px 15px;
    font-size: 15px;
}

.col .inputBox input:focus, .col .inputBox select:focus{
    border: 1px solid #000;
}

.col .flex{
    display: flex;
    gap: 15px;
}

.col .flex .inputBox{
    flex: 1 1;
    margin-top: 5px;
}

.col .inputBox img{
    height: 34px;
    margin-top: 5px;
    filter: drop-shadow(0 0 1px #000);
}

.container form .submit_btn{
    width: 100%;
    padding: 12px;
    font-size: 17px;
    background: #5e8f94;
    color: #fff;
    margin-top: 5px;
    cursor: pointer;
    letter-spacing: 1px;
}

.container form .submit_btn:hover{
    background: #73B5BD;
}

input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button{
    display: none;
}