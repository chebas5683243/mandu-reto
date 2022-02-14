export const getSendParams = (pagination, filters, sorter) => {
  
  let sorterForSend = getSorts(sorter);

  return {
    size: pagination?.pageSize,
    page: pagination?.current,
    filters,
    sorter: sorterForSend
  }
}

const getSorts = (sorter) => {

  let sorterForSend = [];

  if(Object.keys(sorter).length === 0) return sorterForSend;

  if (!Array.isArray(sorter)) {
    if(sorter.column) sorter = [sorter];
    else return sorterForSend;
  }

  sorter.sort(function (a, b){
    return b.column.sorter.multiple - a.column.sorter.multiple;
  });

  sorter.forEach(sort => {
    sorterForSend.push({
      name: sort.column?.dataIndex,
      order: sort.order === "ascend" ? "asc" : "desc"
    })
  })

  return sorterForSend;
}