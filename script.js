const depositeBlance = document.getElementById("deposite-blance");
const depositeInput = document.getElementById("deposite-input");
const depositeBtn = document.getElementById("deposite-btn");

const withdrawBlance = document.getElementById("withdraw-blance");
const withdrawInput = document.getElementById("withdraw-input");
const withdrawBtn = document.getElementById("withdraw-btn");


const totalBalance = document.getElementById("total-blance");

depositeBtn.addEventListener("click", function () {

  const depositeValue = depositeInput.value;

  const updateDeposite = parseFloat(depositeValue);
  const depoValue = parseFloat(depositeBlance.innerText);
 
  depositeBlance.innerText = updateDeposite + depoValue;
  totalBalance.innerText = parseFloat(totalBalance.innerText) + updateDeposite;

  depositeInput.value = "";
});

withdrawBtn.addEventListener("click", function () {
    const depositeValue = withdrawInput.value;
    const updateWithdraw = parseFloat(depositeValue);
    const withdrawValue = parseFloat(withdrawBlance.innerText);

    withdrawBlance.innerText = updateWithdraw + withdrawValue;

    totalBalance.innerText = parseFloat(totalBalance.innerText) - updateWithdraw;

  withdrawInput.value = "";
  
  // if(totalBalance.innerText<500){
  //   alert('No Balance')
    
});