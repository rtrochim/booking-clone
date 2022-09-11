import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/40890517.jpg?k=cd55de5463af8988f78fd675904a43d02f77570debe9977c4c1fe658030b6d29&o=" alt="" className="fpImg"/>
        <span className="fpName">Aparthotel Mariott</span>
        <span className="fpCity">Warsaw</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.4</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/69813393.jpg?k=aca2217cc21edcf3f108b94bc79ee527f8c709732b6e20815fcf4ba1f7fae991&o=" alt="" className="fpImg"/>
        <span className="fpName">Canary Resort</span>
        <span className="fpCity">Gran Canaria</span>
        <span className="fpPrice">Starting from $90</span>
        <div className="fpRating">
          <button>8.3</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/74594395.jpg?k=d5a71c0578774c302d2b8854482beaa8785077c616f956aac74766124023a319&o=" alt="" className="fpImg"/>
        <span className="fpName">Hotel Giovanni</span>
        <span className="fpCity">Rome</span>
        <span className="fpPrice">Starting from $150</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/75328633.jpg?k=87304e5542c63c022f2cbc134b02b85b65496a9ed8c6ca129b49c02f817589db&o=" alt="" className="fpImg"/>
        <span className="fpName">Deluxe Suite</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $130</span>
        <div className="fpRating">
          <button>8.1</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;