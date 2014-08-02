//TODO: Please write code in this file.
function printInventory(inputs)
{
  var inputs;
  var allItems=loadAllItems();
  var itemNum=[];
  var subtotal=new Array(10);
  var exceptText=new Array(3);
  for (i=0,i<inputs.length,i++)
    {
      itemNum[i]=0;
    }
    //
  for(i=0,i<inputs.length,i++)
    {
      if(inputs[i].length<11)
      {
         for(j=0,j<allItems.length,j++)
        {
          if(inputs[i]==allItems[j].barcode)
            itemNum[j]++;
        }
      }
  else
  {
    for(k=0,k<allItems.length,k++)
    {
      if(inputs[i].substring(0,10)==allItems[k].barcode)
        itemNum[k]=intputs[i].substring(11,12);
    }
  }
}
//
  for(i=0;i<itemNum.length;i++)
    {
         subtotal[i]=itemNum[i]*allItems[i].price;
  }
  //
  console.log('***没钱赚商店***\n');
  for(i=0;i<inputs.length;i++)
    {
    if(itemNum[i]!=0)
     
      console.log('名称:'+allItems[i].name,'数量：'+itemNum[i]+allItems[i].unit,'单价:'+allItems[i].price,'小计：'+subtotal[i])；
  }


}
