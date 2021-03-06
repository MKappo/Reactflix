import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function createCategory(novaCategoria) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(novaCategoria),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();

        return resposta;
      }

      throw new Error('Não foi possivel cadastrar a categoria :(');
    });
}

function deleteCategory(categoriaExistente) {
  const id = categoriaExistente.target.getAttribute('id');

  return fetch(`${URL_CATEGORIES}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();

        return resposta;
      }

      throw new Error('Não foi possivel conectar com o servidor :(');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();

        return resposta;
      }

      throw new Error('Não foi possivel conectar com o servidor :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();

        return resposta;
      }

      throw new Error('Não foi possivel conectar com o servidor :(');
    });
}

export default {
  createCategory,
  deleteCategory,
  getAllWithVideos,
  getAll,
};
