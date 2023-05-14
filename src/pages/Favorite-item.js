export const FavoriteItem = (props) => {
    const {  productImage } = props.data;
   
  
    return (
      <div className="cartItem">
        <img  src={productImage} alt="..." />
        <div>
        <dl>
            <dt className="fw-bolder h3">Lorem Ipsum</dt>
            <dd className="p">is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</dd>
        </dl>
          
        </div>
      </div>
    );
  };
