// ==== GUARDAR FAVORITOS EN LOCAL STORAGE ====
//MOSTRAR LISTA DE FAVORITOS




    // ==== MENÚ DESPLEGABLE ====
    const menuIcon = document.querySelector(".burguer-icon");
    const menuDesplegable = document.getElementById("menu-desplegable");
    
    


    

    menuIcon.addEventListener('click', () => {
      menuDesplegable.classList.toggle("active");
      menuIcon.classList.toggle("active");
    });

    // 🔹 Cierra el menú al hacer clic en un enlace
      menuDesplegable.querySelectorAll("a").forEach(link => 
        link.addEventListener("click", () => {
          menuDesplegable.classList.remove("active");
          menuIcon.classList.remove("active");
        })
      );

      // Cerrar el menú al hacer clic fuera de él
      document.addEventListener("click", (e) => {
        const clickDentroMenu = menuDesplegable.contains(e.target);
        const clickEnIcono = menuIcon.contains(e.target);

        if (!clickDentroMenu && !clickEnIcono) {
          menuDesplegable.classList.remove("active");
          menuIcon.classList.remove("active");
        }
      });
          


// ==== DATOS DEL CATÁLOGO ====
    const productos = [
      { id: 1, nombre: "Guitarra Acústica", precio: 350, imagen: "img/guitarraacustica.jpg" },
      { id: 2, nombre: "Batería", precio: 900, imagen: "img/bateria.jpg" },
      { id: 3, nombre: "Teclado", precio: 500, imagen: "img/tecladonord.jpg" },
      { id: 4, nombre: "Violín", precio: 300, imagen: "img/violin.jpeg" },
      { id: 5, nombre: "Micrófono", precio: 120, imagen: "img/microfono.jpeg" },
      { id: 6, nombre: "Amplificador", precio: 400, imagen: "img/amplificador.jpeg" },
      { id: 7, nombre: "Guitarra Acústica", precio: 350, imagen: "img/guitarraacustica.jpg" },
      { id: 8, nombre: "Batería", precio: 900, imagen: "img/bateria.jpg" },
      { id: 9, nombre: "Teclado", precio: 500, imagen: "img/tecladonord.jpg" },
      { id: 10, nombre: "Violín", precio: 300, imagen: "img/violin.jpeg" },
      { id: 11, nombre: "Micrófono", precio: 120, imagen: "img/microfono.jpeg" },
      { id: 12, nombre: "Amplificador", precio: 400, imagen: "img/amplificador.jpeg" },
    ];

    const catalogo = document.getElementById("catalogo");
    const listaCarrito = document.getElementById("lista-carrito");
    const total = document.getElementById("total");
    const btnConfirmar = document.getElementById("btn-confirmar");

    let carrito = [];

    // ==== MOSTRAR CATÁLOGO ====
    function mostrarCatalogo() {
      productos.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
          <div class="img-container">
            <img class="imagen-producto" src="${prod.imagen}" alt="${prod.nombre}">
          </div>
          <h3>${prod.nombre}</h3>
          <p>$${prod.precio}</p>
          <button class="btn-agregar" data-id="${prod.id}">Agregar</button>
          <button id="btn-favorito" class="btn-favorito" data-id="${prod.id}">⭐</button>
        `;
        catalogo.appendChild(div);
      });
    }

    // ==== AGREGAR PRODUCTO AL CARRITO ====
    function agregarAlCarrito(id) {
      const producto = productos.find(p => p.id === id);
      carrito.push(producto);
      actualizarCarrito();
    }

    // ==== ELIMINAR PRODUCTO ====
    function eliminarDelCarrito(index) {
      carrito.splice(index, 1);
      actualizarCarrito();
    }

    // ==== ACTUALIZAR CARRITO ====
    function actualizarCarrito() {
      listaCarrito.innerHTML = "";
      let totalCompra = 0;

      carrito.forEach((item, index) => {
        totalCompra += item.precio;
        const div = document.createElement("div");
        div.classList.add("carrito-item");
        div.innerHTML = `
          <span>${item.nombre}</span>
          <span>$${item.precio}</span>
          <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">X</button>
        `;
        listaCarrito.appendChild(div);
      });

      total.textContent = `Total: $${totalCompra}`;
    }

    // ==== CONFIRMAR PEDIDO ====
    btnConfirmar.addEventListener("click", () => {
      if (carrito.length === 0) {
        alert("El carrito está vacío 🛒");
        return;
      }
      alert("✅ ¡Gracias por tu compra! Tu pedido ha sido confirmado.");
      carrito = [];
      actualizarCarrito();
    });

    // ==== EVENTOS DE BOTONES ====
    catalogo.addEventListener("click", e => {
      if (e.target.classList.contains("btn-agregar")) {
        const id = parseInt(e.target.getAttribute("data-id"));
        agregarAlCarrito(id);
      }
    });

    // ==== INICIALIZAR ====
    mostrarCatalogo();

    // ==== FAVORITOS ====
    catalogo.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-favorito")) {
        e.target.classList.toggle("active"); // activa/desactiva la clase
      }
    });