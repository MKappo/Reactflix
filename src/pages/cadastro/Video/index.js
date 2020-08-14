import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitle = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (

    <PageDefault>
      <h1>
        Cadastro de Video
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        // eslint-disable-next-line arrow-body-style
        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        // console.log('categoriaEscolhida: ', categoriaEscolhida);

        videosRepository.create({
          categoriaId: categoriaEscolhida.id,
          titulo: values.titulo,
          url: values.url,
        })
          .then(() => {
            // console.log('Cadastrou com Sucesso');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Titulo do Video"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitle}
        />

        <Button type="submit">
          Salvar
        </Button>

      </form>

      <br />
      <Link to="/cadastro/categoria">
        Cadastro de Categoria
      </Link>
      <br />
    </PageDefault>

  );
}

export default CadastroVideo;
