// 商品卡片类型接口
export default interface GoodsCardType {
  /**
   * 商品主图路径
   */
  imgUrl: string
  /**
   * 商品图片宽度
   * @default 338
   *  */
  imgWidth?: number,
  /**
   * 商品图片高度
   * @default 338
   *  */
  imgHeight?: number,
  /**
   * 商品标题
   */
  title: string,
  /**
   * 标题行数
   * @default 2
   *  */
  titleLine?: number,
  /**
   * 商品卡片点击事件
   * 点击动画（300ms）执行完成后触发
   */
  onClick?: () => void
}