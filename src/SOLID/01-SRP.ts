(() => {

  interface Product {
    id: number;
    name: string;
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductService {
    getProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log('Producto: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos 
      console.log('Guardando en base de datos', product);
    }
  }

  class ProductBloc {
    private productService: ProductService;
    private cartService: CartService;
    private messagingService: MessagingService;

    constructor(productService: ProductService, cartService: CartService, messagingService: MessagingService) {
      this.productService = productService;
      this.cartService = cartService;
      this.messagingService = messagingService;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
     this.productService.saveProduct(product);
    }
    onAddToCart(productId: number) {
      this.cartService.addToCart(productId)
    }
    notifyClients(){
      this.messagingService.sendEmail(['XXXXXXXXXXXXXXX', 'XXXXXXXXXXXXXXX'], 'to-admins');
    }
  }


  class CartService {
    addToCart(productId: number) {
      console.log('Agregando al carrito ', productId);
    }
  }

  class MessagingService {

    private _email = 'company@email.com'

    sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
      console.log('Enviando correo', template, emailList);
    }
  }

  const productService = new ProductService();
  const cartService = new CartService();
  const messagingService = new MessagingService();

  const productBloc = new ProductBloc(
    productService,
    cartService,
    messagingService
  );

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  productBloc.onAddToCart(10);

})();