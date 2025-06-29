import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    catalogo_carrosel:[
        {
            id:'0',
            img:'/bannermarketplacechegai.PNG',
            title: 'Lançamentos',
            subtitle: 'Cupom 10% na primeira compra',
            button: 'Compre agora',
        },
        {
            id:'1',
            img:'/frame01.png',
            title: 'Novidades',
            subtitle: 'Entrega grátis acima de R$ 99',
            button: 'Descubra mais',
        },
        {
            id:'2',
            img:'/bannercomunidade.png',
            title: 'Conheça nossa comunidade',
            subtitle: 'Conecte-se com amigos e familia',
            button: 'Veja agora',
        },
        {
            id:'3',
            img:'/frame01.png',
            title: 'Coleção nova',
            subtitle: 'Looks exclusivos para você',
            button: 'Veja agora',
        },
    ],
    promocoes_relampago:[
        {
            id:'',
            name:'',
            img:'',
            descricao:'',
            old_price:0,
            price:0,
            discount:0,
            rating:0,
            rating_taxes:0,
            reviews:0
        },
        {
            id:'',
            name:'',
            img:'',
            descricao:'',
            old_price:0,
            price:0,
            discount:0,
            rating:0,
            rating_taxes:0,
            reviews:0
        },
        {
            id:'',
            name:'',
            img:'',
            descricao:'',
            old_price:0,
            price:0,
            discount:0,
            rating:0,
            rating_taxes:0,
            reviews:0
        },
        {
            id:'',
            name:'',
            img:'',
            descricao:'',
            old_price:0,
            price:0,
            discount:0,
            rating:0,
            rating_taxes:0,
            reviews:0
        },
        {
            id:'',
            name:'',
            img:'',
            descricao:'',
            old_price:0,
            price:0,
            discount:0,
            rating:0,
            rating_taxes:0,
            reviews:0
        },
        {
            id:'',
            name:'',
            img:'',
            descricao:'',
            old_price:0,
            price:0,
            discount:0,
            rating:0,
            rating_taxes:0,
            reviews:0
        },
        {
            id:'',
            name:'',
            img:'',
            descricao:'',
            old_price:0,
            price:0,
            discount:0,
            rating:0,
            rating_taxes:0,
            reviews:0
        },
        {
            id:'',
            name:'',
            img:'',
            descricao:'',
            old_price:0,
            price:0,
            discount:0,
            rating:0,
            rating_taxes:0,
            reviews:0
        },
        {
            id:'',
            name:'',
            img:'',
            descricao:'',
            old_price:0,
            price:0,
            discount:0,
            rating:0,
            rating_taxes:0,
            reviews:0
        },
        {
            id:'',
            name:'',
            img:'',
            descricao:'',
            old_price:0,
            price:0,
            discount:0,
            rating:0,
            rating_taxes:0,
            reviews:0
        }
    ],
    produtos_mais_vendidos:[
        {
            id:'',
            img:'',
            descricao:'',
            preço_original:0,
            desconto:0,
            n_parcelas_sem_juros:0,
            parcelas_com_juros:0,
            tempo:0
        },
        {
            id:'',
            img:'',
            descricao:'',
            preço_original:0,
            desconto:0,
            n_parcelas_sem_juros:0,
            parcelas_com_juros:0,
            tempo:0
        },
        {
            id:'',
            img:'',
            descricao:'',
            preço_original:0,
            desconto:0,
            n_parcelas_sem_juros:0,
            parcelas_com_juros:0,
            tempo:0
        },
        {
            id:'',
            img:'',
            descricao:'',
            preço_original:0,
            desconto:0,
            n_parcelas_sem_juros:0,
            parcelas_com_juros:0,
            tempo:0
        },
        {
            id:'',
            img:'',
            descricao:'',
            preço_original:0,
            desconto:0,
            n_parcelas_sem_juros:0,
            parcelas_com_juros:0,
            tempo:0
        },
        {
            id:'',
            img:'',
            descricao:'',
            preço_original:0,
            desconto:0,
            n_parcelas_sem_juros:0,
            parcelas_com_juros:0,
            tempo:0
        }
    ],
    destaques:[
        {
            id:'',
            img:'',
            descricao:'',
            preço_original:0,
            desconto:0,
            n_parcelas_sem_juros:0,
            parcelas_com_juros:0,
            tempo:0
        },
        {
            id:'',
            img:'',
            descricao:'',
            preço_original:0,
            desconto:0,
            n_parcelas_sem_juros:0,
            parcelas_com_juros:0,
            tempo:0
        },
        {
            id:'',
            img:'',
            descricao:'',
            preço_original:0,
            desconto:0,
            n_parcelas_sem_juros:0,
            parcelas_com_juros:0,
            tempo:0
        },
        {
            id:'',
            img:'',
            descricao:'',
            preço_original:0,
            desconto:0,
            n_parcelas_sem_juros:0,
            parcelas_com_juros:0,
            tempo:0
        }
    ]
}

export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    get_catalogo: (state, action) => {
      state.catalogo_carrosel = action.payload;
    },
    get_promocoes_relampago: (state,action) =>{
        state.promocoes_relampago = action.payload;
    },
    get_produtos_mais_vendidos:(state,action)=>{
        state.produtos_mais_vendidos = action.payload
    },
    get_destaques:(state,action) => {
        state.destaques = action.payload;
    }
  },
});


export const {get_catalogo,get_promocoes_relampago,get_produtos_mais_vendidos,get_destaques} = homepageSlice.actions;

export default homepageSlice.reducer;