function ListItems({data, renderItem}) {
  return (
    <ul>
      {/* {data.map((item) => renderItem(item))} */}
      {data.map(renderItem)}
    </ul>
  )
}

export default ListItems
