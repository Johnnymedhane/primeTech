function ListItems({data, renderItem}) {
  return (
    <ul>
      {data.map((item) => renderItem(item))}
    </ul>
  )
}

export default ListItems
