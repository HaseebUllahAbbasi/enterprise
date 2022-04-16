import _ from 'lodash'
const Paginate  = (items,pageNumber,pageSize)=>
{
    const startIndex = (pageNumber -1 )* pageSize;
    //  (items).slice(items,startIndex);
    return _(items).slice(startIndex).take(pageSize).value();

    //  
}
export default Paginate;