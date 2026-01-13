// Base de dados central - todas as transações financeiras
let dadosFinanceiros = {
    periodo: '12/2024',
    
    // Entradas (Receitas)
    receitas: [
        { id: 1, tipo: 'entrada', descricao: 'Armário Copa - Casa Silva', categoria: 'Vendas de Produtos', valor: 8500, data: '10/12/2024', status: 'pendente', projetoId: 'PRJ-001' },
        { id: 2, tipo: 'entrada', descricao: 'Roupeiro 4 portas - Entrada', categoria: 'Vendas de Produtos', valor: 3100, data: '08/12/2024', status: 'pago', projetoId: 'PRJ-002' },
        { id: 3, tipo: 'entrada', descricao: 'Mesa de Jantar - Quitação', categoria: 'Vendas de Produtos', valor: 4800, data: '05/12/2024', status: 'pago', projetoId: 'PRJ-003' },
        { id: 4, tipo: 'entrada', descricao: 'Cozinha Americana - Entrada 50%', categoria: 'Vendas de Produtos', valor: 7500, data: '15/12/2024', status: 'pendente', projetoId: 'PRJ-005' },
        { id: 5, tipo: 'entrada', descricao: 'Closet Master - Quitação', categoria: 'Vendas de Produtos', valor: 12000, data: '01/12/2024', status: 'pago', projetoId: 'PRJ-007' },
        { id: 6, tipo: 'entrada', descricao: 'Estante Livros - Sinal', categoria: 'Vendas de Produtos', valor: 1600, data: '20/12/2024', status: 'pendente', projetoId: 'PRJ-004' },
        { id: 7, tipo: 'entrada', descricao: 'Home Office - Sinal', categoria: 'Vendas de Produtos', valor: 2750, data: '22/12/2024', status: 'pendente', projetoId: 'PRJ-006' },
        { id: 8, tipo: 'entrada', descricao: 'Serviços de Montagem - Diversos', categoria: 'Serviços', valor: 27300, data: '30/12/2024', status: 'pago', projetoId: null },
        { id: 9, tipo: 'entrada', descricao: 'Ajuste Móvel Antigo - Cliente Avulso', categoria: 'Serviços', valor: 850, data: '12/12/2024', status: 'pago', projetoId: null },
    ],
    
    // Saídas (Despesas)
    despesas: [
        // Fornecedores / CPV
        { id: 101, tipo: 'saida', descricao: 'Fornecedor MDF São Paulo', categoria: 'Matéria-prima', valor: 18500, data: '05/12/2024', status: 'pago', contabil: 'CPV' },
        { id: 102, tipo: 'saida', descricao: 'Ferragens Express Ltda', categoria: 'Matéria-prima', valor: 8500, data: '10/12/2024', status: 'pago', contabil: 'CPV' },
        { id: 103, tipo: 'saida', descricao: 'Colas e Acabamentos', categoria: 'Matéria-prima', valor: 3200, data: '12/12/2024', status: 'pendente', contabil: 'CPV' },
        { id: 104, tipo: 'saida', descricao: 'Vidraçaria Centro', categoria: 'Matéria-prima', valor: 4500, data: '15/12/2024', status: 'pendente', contabil: 'CPV' },
        { id: 105, tipo: 'saida', descricao: 'Puxadores e Acessórios', categoria: 'Matéria-prima', valor: 3800, data: '18/12/2024', status: 'pendente', contabil: 'CPV' },
        
        // Mão de Obra Direta
        { id: 106, tipo: 'saida', descricao: 'Mão de obra direta - Produção', categoria: 'Mão de Obra', valor: 6700, data: '05/12/2024', status: 'pago', contabil: 'CPV' },
        
        // Folha de Pagamento
        { id: 201, tipo: 'saida', descricao: 'Folha de Pagamento - Dez/2024', categoria: 'Salários', valor: 19500, data: '05/12/2024', status: 'pago', contabil: 'Despesa Operacional' },
        { id: 202, tipo: 'saida', descricao: 'Pró-labore Sócios - Dez/2024', categoria: 'Pró-labore', valor: 12000, data: '05/12/2024', status: 'pago', contabil: 'Despesa Operacional' },
        { id: 203, tipo: 'saida', descricao: 'FGTS - Nov/2024', categoria: 'Encargos', valor: 1560, data: '07/12/2024', status: 'pago', contabil: 'Despesa Operacional' },
        { id: 204, tipo: 'saida', descricao: 'INSS Funcionários', categoria: 'Encargos', valor: 2145, data: '20/12/2024', status: 'pendente', contabil: 'Despesa Operacional' },
        { id: 205, tipo: 'saida', descricao: 'INSS Patronal (Pró-labore)', categoria: 'Encargos', valor: 2400, data: '20/12/2024', status: 'pendente', contabil: 'Despesa Operacional' },
        { id: 206, tipo: 'saida', descricao: 'Vale Transporte + Vale Refeição', categoria: 'Benefícios', valor: 3100, data: '01/12/2024', status: 'pago', contabil: 'Despesa Operacional' },
        
        // Impostos
        { id: 301, tipo: 'saida', descricao: 'DAS - Simples Nacional Nov/2024', categoria: 'Impostos', valor: 8920, data: '20/12/2024', status: 'pendente', contabil: 'Dedução Receita' },
        { id: 302, tipo: 'saida', descricao: 'IRRF (Pró-labore)', categoria: 'Impostos', valor: 869.36, data: '20/12/2024', status: 'pendente', contabil: 'Despesa Operacional' },
        
        // Despesas Operacionais
        { id: 401, tipo: 'saida', descricao: 'Aluguel Galpão + Condomínio', categoria: 'Aluguel', valor: 4500, data: '10/12/2024', status: 'pago', contabil: 'Despesa Operacional' },
        { id: 402, tipo: 'saida', descricao: 'Energia Elétrica', categoria: 'Utilidades', valor: 1450, data: '15/12/2024', status: 'pago', contabil: 'Despesa Operacional' },
        { id: 403, tipo: 'saida', descricao: 'Água e Esgoto', categoria: 'Utilidades', valor: 350, data: '15/12/2024', status: 'pago', contabil: 'Despesa Operacional' },
        { id: 404, tipo: 'saida', descricao: 'Internet + Telefone', categoria: 'Utilidades', valor: 280, data: '20/12/2024', status: 'pendente', contabil: 'Despesa Operacional' },
        { id: 405, tipo: 'saida', descricao: 'Marketing Digital', categoria: 'Marketing', valor: 800, data: '01/12/2024', status: 'pago', contabil: 'Despesa Operacional' },
        { id: 406, tipo: 'saida', descricao: 'Manutenção Seccionadora', categoria: 'Manutenção', valor: 650, data: '08/12/2024', status: 'pago', contabil: 'Despesa Operacional' },
        { id: 407, tipo: 'saida', descricao: 'Combustível - Entregas', categoria: 'Transporte', valor: 850, data: '30/12/2024', status: 'pendente', contabil: 'Despesa Operacional' },
        { id: 408, tipo: 'saida', descricao: 'Material de Escritório', categoria: 'Outras Despesas', valor: 180, data: '05/12/2024', status: 'pago', contabil: 'Despesa Operacional' },
        { id: 409, tipo: 'saida', descricao: 'Contador - Honorários', categoria: 'Serviços PJ', valor: 890, data: '10/12/2024', status: 'pago', contabil: 'Despesa Operacional' },
        
        // Financeiras
        { id: 501, tipo: 'saida', descricao: 'Tarifas Bancárias', categoria: 'Despesas Financeiras', valor: 185, data: '30/12/2024', status: 'pago', contabil: 'Despesa Financeira' },
        { id: 502, tipo: 'saida', descricao: 'Juros Cartão', categoria: 'Despesas Financeiras', valor: 265, data: '30/12/2024', status: 'pago', contabil: 'Despesa Financeira' },
    ],
    
    // Receitas Financeiras
    receitasFinanceiras: [
        { id: 601, descricao: 'Rendimento Aplicação', valor: 320, data: '30/12/2024' },
        { id: 602, descricao: 'Desconto obtido fornecedor', valor: 130, data: '15/12/2024' },
    ]
};

let projetos = [
    { id: 'PRJ-001', nome: 'Armário Copa Completo', cliente: 'Carlos Silva', valor: 8500, progresso: 80, entrega: '10/12/2024', status: 'em_andamento' },
    { id: 'PRJ-002', nome: 'Roupeiro 4 Portas', cliente: 'Maria Santos', valor: 6200, progresso: 45, entrega: '15/12/2024', status: 'em_andamento' },
    { id: 'PRJ-003', nome: 'Mesa de Jantar 8 Lugares', cliente: 'José Oliveira', valor: 4800, progresso: 100, entrega: '05/12/2024', status: 'concluido' },
    { id: 'PRJ-004', nome: 'Estante para Livros', cliente: 'Ana Pereira', valor: 3200, progresso: 25, entrega: '20/12/2024', status: 'a_fazer' },
    { id: 'PRJ-005', nome: 'Cozinha Americana', cliente: 'Roberto Costa', valor: 15000, progresso: 60, entrega: '18/12/2024', status: 'em_andamento' },
    { id: 'PRJ-006', nome: 'Home Office Completo', cliente: 'Fernanda Lima', valor: 5500, progresso: 0, entrega: '25/12/2024', status: 'a_fazer' },
    { id: 'PRJ-007', nome: 'Closet Master', cliente: 'Ricardo Mendes', valor: 12000, progresso: 100, entrega: '01/12/2024', status: 'concluido' },
];

let estoque = [
    { id: 1, codigo: 'MDF-001', material: 'MDF 15mm Branco 2750x1850', categoria: 'mdf', quantidade: 45, minima: 20, unidade: 'chapas' },
    { id: 2, codigo: 'MDF-002', material: 'MDF 18mm Imbuia 2750x1850', categoria: 'mdf', quantidade: 12, minima: 15, unidade: 'chapas' },
    { id: 3, codigo: 'FER-001', material: 'Dobradiça Italiana 35mm', categoria: 'ferragens', quantidade: 850, minima: 200, unidade: 'pcs' },
    { id: 4, codigo: 'FER-002', material: 'Corrediça Telescópica 350mm', categoria: 'ferragens', quantidade: 45, minima: 50, unidade: 'pcs' },
    { id: 5, codigo: 'FER-003', material: 'Puxador Alumínio 800mm', categoria: 'ferragens', quantidade: 120, minima: 30, unidade: 'pcs' },
    { id: 6, codigo: 'COL-001', material: 'Cola de Contato 1kg', categoria: 'cola', quantidade: 8, minima: 10, unidade: 'un' },
    { id: 7, codigo: 'PAR-001', material: 'Parafuso 4x50mm (1000pcs)', categoria: 'parafusos', quantidade: 15, minima: 20, unidade: 'cx' },
    { id: 8, codigo: 'PAR-002', material: 'Parafuso Minifix 32mm', categoria: 'parafusos', quantidade: 2500, minima: 1000, unidade: 'pcs' },
];

let clientes = [
    { id: 1, nome: 'Carlos Silva', telefone: '(11) 99999-8888', endereco: 'Rua das Flores, 123 - SP', projetos: 3, email: 'carlos@email.com', preferencias: 'MDF Branco, Puxadores modernos' },
    { id: 2, nome: 'Maria Santos', telefone: '(11) 98888-7777', endereco: 'Av. Paulista, 456 - SP', projetos: 2, email: 'maria@email.com', preferencias: 'Madeira natural, cores neutras' },
    { id: 3, nome: 'José Oliveira', telefone: '(11) 97777-6666', endereco: 'Rua XV, 789 - SP', projetos: 1, email: 'jose@email.com', preferencias: 'MDF escuro, estilo clássico' },
    { id: 4, nome: 'Ana Pereira', telefone: '(11) 96666-5555', endereco: 'Av. Brasil, 321 - SP', projetos: 1, email: 'ana@email.com', preferencias: 'Cores vibrantes, design moderno' },
];

let entregasHoje = [
    { projeto: 'Armário Copa - Casa Silva', cliente: 'Carlos Silva', endereco: 'Rua das Flores, 123', status: 'carregamento', hora: '08:00' },
    { projeto: 'Mesa de Jantar 8 lugares', cliente: 'José Oliveira', endereco: 'Rua XV, 789', status: 'em_transito', hora: '10:30' },
];

let ordensServico = [
    { id: 'OS-2024-156', projeto: 'Armário Copa - Casa Silva', maquina: 'Seccionadora SCM', status: 'em_producao', data: '10/12/2024' },
    { id: 'OS-2024-155', projeto: 'Roupeiro 4 portas', maquina: 'CNC Router', status: 'pendente', data: '11/12/2024' },
    { id: 'OS-2024-154', projeto: 'Mesa de Jantar', maquina: 'Seccionadora SCM', status: 'concluido', data: '08/12/2024' },
];

let pecasCorte = [
    { nome: 'Laterais', medidas: '2400 x 550', quantidade: 2, borda: '2B' },
    { nome: 'Prateleiras', medidas: '1680 x 500', quantidade: 3, borda: '2B' },
    { nome: 'Fundo', medidas: '2400 x 1680', quantidade: 1, borda: 'PP' },
    { nome: 'Portas', medidas: '2400 x 600', quantidade: 2, borda: '4B' },
];

let socios = [
    { id: 1, nome: 'João Machado', cpf: '123.456.789-00', participacao: 60, proLabore: 7000, cargo: 'Sócio Administrador', dataEntrada: '01/01/2020' },
    { id: 2, nome: 'Pedro Santos', cpf: '987.654.321-00', participacao: 40, proLabore: 5000, cargo: 'Sócio Quotista', dataEntrada: '01/01/2020' },
];

let funcionarios = [
    { id: 1, nome: 'Carlos Ferreira', cargo: 'Marceneiro Sênior', salario: 4500, inss: 495, fgts: 360, vt: 300, vr: 500, liquido: 4005, custoTotal: 6155 },
    { id: 2, nome: 'André Lima', cargo: 'Marceneiro', salario: 3500, inss: 385, fgts: 280, vt: 300, vr: 500, liquido: 3115, custoTotal: 4965 },
    { id: 3, nome: 'Roberto Alves', cargo: 'Auxiliar', salario: 2200, inss: 242, fgts: 176, vt: 300, vr: 400, liquido: 1958, custoTotal: 3318 },
    { id: 4, nome: 'Marcos Souza', cargo: 'Montador', salario: 3200, inss: 352, fgts: 256, vt: 300, vr: 500, liquido: 2848, custoTotal: 4608 },
    { id: 5, nome: 'Juliana Costa', cargo: 'Administrativo', salario: 2800, inss: 308, fgts: 224, vt: 200, vr: 400, liquido: 2492, custoTotal: 3932 },
    { id: 6, nome: 'Lucas Mendes', cargo: 'Designer', salario: 3300, inss: 363, fgts: 264, vt: 200, vr: 400, liquido: 2937, custoTotal: 4527 },
];

let impostos = [
    { nome: 'DAS - Simples Nacional', valor: 8920, vencimento: '20/12/2024', status: 'pendente', competencia: 'Nov/2024' },
    { nome: 'FGTS', valor: 1560, vencimento: '07/12/2024', status: 'pago', competencia: 'Nov/2024' },
    { nome: 'INSS Patronal (Pró-labore)', valor: 2400, vencimento: '20/12/2024', status: 'pendente', competencia: 'Nov/2024' },
    { nome: 'IRRF (Pró-labore)', valor: 869.36, vencimento: '20/12/2024', status: 'pendente', competencia: 'Nov/2024' },
];

let bens = [
    { id: 1, descricao: 'Seccionadora SCM SI 350', categoria: 'Máquinas', dataAquisicao: '15/03/2021', valorAquisicao: 85000, depreciacaoAnual: 10, valorAtual: 59500 },
    { id: 2, descricao: 'CNC Router 3 Eixos', categoria: 'Máquinas', dataAquisicao: '10/08/2022', valorAquisicao: 65000, depreciacaoAnual: 10, valorAtual: 52000 },
    { id: 3, descricao: 'Coladeira de Bordas', categoria: 'Máquinas', dataAquisicao: '05/01/2023', valorAquisicao: 35000, depreciacaoAnual: 10, valorAtual: 31500 },
    { id: 4, descricao: 'Fiat Fiorino 2022', categoria: 'Veículos', dataAquisicao: '20/06/2022', valorAquisicao: 75000, depreciacaoAnual: 20, valorAtual: 45000 },
    { id: 5, descricao: 'Compressor de Ar 200L', categoria: 'Máquinas', dataAquisicao: '12/04/2020', valorAquisicao: 8000, depreciacaoAnual: 10, valorAtual: 4800 },
    { id: 6, descricao: 'Mobiliário Escritório', categoria: 'Móveis', dataAquisicao: '01/01/2020', valorAquisicao: 15000, depreciacaoAnual: 10, valorAtual: 9000 },
    { id: 7, descricao: 'Computadores e Impressoras', categoria: 'Móveis', dataAquisicao: '15/07/2023', valorAquisicao: 12000, depreciacaoAnual: 20, valorAtual: 9600 },
];