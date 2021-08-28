const arr=[1,1,2,3,4,2,3,5]
var res={}
for(let i =0;i<arr.length;i++)
{
    if(obj[arr[i]]=="undefined")
    {
        obj[arr[i]]=1;
    }
    else
    {
        obj[arr[i]]+=1;
    }
}
res.foreach( key in obj)
{
    if(res[key]==1)
    {
        var dist = [];
        dist.push(res[key])
    }
    else
    {
        var rep=[];
        rep.push(res[key])
    }
}