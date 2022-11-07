using ControleFinanceiro.DAL.Interfaces;
using ControlerFinanceiro.BLL.Models;

namespace ControleFinanceiro.DAL.Repositorios
{
    public class TipoRepositorio : RepositorioGenerico<Tipo>, ITipoRepositorio
    {
        public TipoRepositorio(Contexto contexto) : base(contexto)
        {
        }
    }
}
