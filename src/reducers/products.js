var initialState = [
    {
        id : 1,
        name : 'Iphone 8',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'Apple',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'SamSung s8',
        image : 'https://image.11st.my/h/2/2/2/0/5/7/46222057_B.jpg',
        description : 'SamSung',
        price : 700,
        inventory : 15,
        rating : 3
    },
    {
        id : 3,
        name : 'Oppo F1 S',
        image : 'https://i1.wp.com/eventusproduction.com/wp-content/uploads/2017/06/chien-luoc-marketing-cua-oppo-toc-tien.jpg?resize=445%2C445&ssl=1',
        description : 'Oppo',
        price : 350,
        inventory : 20,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
};

export default products;