
**Descrição do Desafio** [Viva Decora](https://github.com/vivadecora/projeto-front-end-vivadecora-nao-fazer-fork)

**Teste publicado:** [link](https://darkziul.github.io/vivadecora-challenge)

**USO**
* ReactJs
  * Hooks
* Typescript
  * _obs: tarda a produtividade, mas garanti muito menos bugs/erros_
* Redux/Saga
* API TheMovieDb v3
* Routers



**Observação**: 

1. Para o desenvolvimento fiel ao layout solicitado, foi preciso usar a [versão 3 da API TheMovieDb](https://developers.themoviedb.org/4/getting-started), por questão da limitação de métodos que há na [versão 4](https://developers.themoviedb.org/4/getting-started), no qual só tem o método `/list`. Além da necesidade de uma chave/valor de `Response.results[]` : `runtime:number`; no qual não existe na resposta do método `/list`.
2. Na especificações de design: 
   * Breakpoint phone: Alterado para 1024px. Abrange muito mais dispositivos móveis (e tablet, caso alguém use ainda) comparado com 320px; -_container in Mobile: max-width:768px_-
   * Por questão de usabilidade, deixei a cor do texto 'ver sinopse' em branco e strong. Melhor visivilidade.
   * A parte que diz '120 avaliações', fiz um método para deixar o texto singular ou plural.

**Sugestões**
* As imagens em assets, poderiam ser uma sprite ou fontIcon/svg (por questão da qualidade).


**Meus Libs**

* **toHours.ts**: Converter minutos em horas ou segundos em horas.
* **httpBuildQuery.ts**: Converter JSON em _[Query String](https://en.wikipedia.org/wiki/Query_string)_.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
