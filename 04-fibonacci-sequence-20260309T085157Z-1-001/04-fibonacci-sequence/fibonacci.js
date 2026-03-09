function fibonacci(n) {
  // 1. БАЗОВ СЛУЧАЙ
  // Първите две числа в поредицата са фиксирани
  if (n <= 1) {
    return n;
  }

  // 2. РЕКУРСИВЕН СЛУЧАЙ
  // Извикваме функцията два пъти, за да получим сбора на предходните две числа
  return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = fibonacci;