import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/max500/653082.webp?k=c161c185c16c0402f72a69272e3757ffa3b45f5a28accb4c07a2c989625132cf&o=" alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Warsaw</h1>
          <h1>552 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/max500/652924.webp?k=f0a48e91f55098e6d16a361a0d7ba12726a056ff85f92ff616af0feb388024da&o=" alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Kraków</h1>
          <h1>241 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/max500/972536.webp?k=fc90a871db0baae4bd8b649d9624809eaceee5f4ef218f09d158c8fe8d6d6abe&o=" alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Wrocław</h1>
          <h1>133 properties</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;