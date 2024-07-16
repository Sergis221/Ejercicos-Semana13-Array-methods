const libros = [
    "JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Code Complete: A Practical Handbook of Software Construction",
    "Design Patterns: Elements of Reusable Object-Oriented Software",
    "The Pragmatic Programmer: Your Journey to Mastery",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "You Don't Know JS",
    "Python Crash Course",
    "Learning Python",
    "Java: The Complete Reference",
    "Head First Java",
    "C# in Depth",
    "The Go Programming Language",
    "Programming in Scala",
    "Effective Java",
    "Ruby on Rails Tutorial: Learn Web Development with Rails",
    "Node.js Design Patterns",
    "Angular Up and Running",
    "React: Up and Running",
    "Vue.js: Up and Running",
    "Django for Beginners",
    "Flask Web Development",
    "Full Stack Development with Spring Boot and React",
    "Machine Learning Yearning",
    "Data Science for Business",
    "Artificial Intelligence: A Modern Approach",
    "Introduction to Algorithms",
    "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation",
    "Refactoring: Improving the Design of Existing Code",
    "The Mythical Man-Month: Essays on Software Engineering",
    "DevOps Handbook",
    "Git Pro",
    "The Docker Book: Containerization is the New Virtualization",
    "Site Reliability Engineering: How Google Runs Production Systems",
    "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
    "Accelerate: The Science of Lean Software and DevOps",
    "Code: The Hidden Language of Computer Hardware and Software",
    "The C Programming Language",
    "Effective Python: 90 Specific Ways to Write Better Python",
    "Programming Rust",
    "Rust in Action",
    "Go in Practice",
    "Pro Git",
    "Java Concurrency in Practice",
    "The Rust Programming Language"
  ];
  
  function convertirLibrosAObjetos(libros) {
    const librosConvertidos = libros.map((titulo, index) => {
      return { id: index + 1, title: titulo };
    });
    return librosConvertidos;
  }
  
  function obtenerIdPorTitulo(librosConvertidos, tituloBuscado) {
    // Buscamos el objeto que tenga el título buscado y retornamos su id
    const libroEncontrado = librosConvertidos.find(libro => libro.title === tituloBuscado);
    return libroEncontrado ? libroEncontrado.id : null; // Retornamos null si no se encuentra el título
  }
  
  // Convertir los nombres de libros a objetos con id autoincremental
  const librosConvertidos = convertirLibrosAObjetos(libros);
  console.log(librosConvertidos);
  
  // Ejemplo de uso para obtener el id de un libro específico
  const tituloBuscado = "JavaScript: The Good Parts";
  const idLibro = obtenerIdPorTitulo(librosConvertidos, tituloBuscado);
  console.log(`El ID de '${tituloBuscado}' es: ${idLibro}`);
  
  alert(idLibro);
  alert(tituloBuscado);