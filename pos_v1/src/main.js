//TODO: Please write code in this file.
  function printInventory(inputs){
  var allItems = loadAllItems();
  var promotions = loadPromotions();
  var proNum = [];
  var itemNum = [];
  var subtotal = [];
  var saveSubtotal = [];
  var sum = 0;
  var save = 0;
  for(i=0; i<allItems.length; i++){
      itemNum[i] = 0;
      proNum[i] = 0;
      subtotal[i] = 0;
      saveSubtotal[i] = 0;
  }
  for(i=0; i<inputs.length; i++)  {
    for(j=0; j<allItems.length; j++){
      if(inputs[i].length<11){
        if(inputs[i] === allItems[j].barcode){
          itemNum[j]++;
        }
      }
      else{
        if(inputs[i].substring(0,10) === allItems[j].barcode){
          itemNum[j] = inputs[i].substring(11,inputs[i].length);
        }
      }
    }
  }
  for(i=0; i<promotions.length; i++){
    if(promotions[i].type === 'BUY_TWO_GET_ONE_FREE'){
      var proBarcodes = promotions[i].barcodes;
        for(j=0; j<proBarcodes.length; j++){
          for(k=0; k<allItems.length; k++)
            if(proBarcodes[j] === allItems[k].barcode){
               proNum[k] = parseInt(itemNum[k]/3);
        }
      }
    }
  }
  var text = '***<没钱赚商店>购物清单***\n';
  for(i=0; i<itemNum.length; i++){
    var trueNum = itemNum[i]-proNum[i];
    subtotal[i] = trueNum*(allItems[i].price);
    saveSubtotal[i] = proNum[i]*(allItems[i].price);
      if(itemNum[i]>0)
        text += '名称：'+allItems[i].name+'，数量：'+itemNum[i]+allItems[i].unit+'，单价：'+(allItems[i].price).toFixed(2)+'(元)，小计：'+(subtotal[i]).toFixed(2)+'(元)\n';
  }
  text += '----------------------\n挥泪赠送商品：\n';
  for(i=0; i<proNum.length; i++){
    if(proNum[i] != 0)
      text +='名称：'+allItems[i].name+'，数量：'+proNum[i]+allItems[i].unit+'\n';
  }
  for(i=0; i<itemNum.length; i++){
    if(itemNum[i]>0)
      sum += subtotal[i];
  }
  for(i=0; i<proNum.length; i++){
    if(proNum[i]>0)
      save += saveSubtotal[i];
  }
  text += '----------------------\n总计：'+sum.toFixed(2)+'(元)\n节省：'+save.toFixed(2)+'(元)\n**********************';
  console.log(text);
  }
