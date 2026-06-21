import assert from 'assert';
import ServicoDePagamento from '../src/servicoDePagamento.js';

describe('ServicoDePagamento', () => {

  it('deve cadastrar um pagamento com categoria padrão', () => {
    const servico = new ServicoDePagamento();

    servico.pagar('0987-7656-3475', 'Samar', 100);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.categoria, 'padrão');
  });

  it('deve cadastrar um pagamento com categoria cara', () => {
    const servico = new ServicoDePagamento();

    servico.pagar('0123-7666-3413', 'Samar', 100.01);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.categoria, 'cara');
  });

  it('deve retornar o último pagamento realizado', () => {
    const servico = new ServicoDePagamento();

    servico.pagar('1111', 'Empresa A', 50);
    servico.pagar('2222', 'Empresa B', 150);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.deepStrictEqual(ultimoPagamento, {
      codigoBarras: '2222',
      empresa: 'Empresa B',
      valor: 150,
      categoria: 'cara'
    });
  });

  it('deve retornar undefined quando não houver pagamento', () => {
    const servico = new ServicoDePagamento();

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento, undefined);
  });

});