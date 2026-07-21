# Site do casamento — Daniel & Michele

Esta pasta contém um site estático e gratuito, pronto para publicar.

## Arquivos

- `index.html`: conteúdo do site.
- `style.css`: cores, tipografia e layout.
- `script.js`: contagem regressiva, menu e botão de copiar PIX.

## O que editar antes de publicar

Abra o arquivo `index.html` em um editor de texto e procure por:

- `Horário a confirmar`
- `Paróquia a confirmar`
- `Local a confirmar`
- `Endereço a confirmar`
- `ADICIONAR CHAVE PIX`
- Os textos da seção “Nossa história”
- O link `href="#"` do botão de confirmação de presença
- Os links `href="#"` dos botões de mapa

## Como colocar uma foto

1. Salve uma foto na mesma pasta com o nome `foto-casal.jpg`.
2. No arquivo `style.css`, localize `.photo-banner`.
3. Substitua o bloco `background:` por:

```css
background:
  linear-gradient(rgba(24,56,95,.25), rgba(24,56,95,.25)),
  url("foto-casal.jpg") center/cover no-repeat;
```

4. No `index.html`, apague o bloco:

```html
<div class="photo-placeholder">
  ...
</div>
```

## Formulário gratuito de confirmação

1. Crie um Google Forms.
2. Copie o link de compartilhamento.
3. No `index.html`, procure o botão “Confirmar presença”.
4. Troque `href="#"` pelo link do formulário.

## Publicar gratuitamente no GitHub Pages

1. Crie uma conta no GitHub.
2. Crie um novo repositório público.
3. Envie os três arquivos do site.
4. Abra `Settings` > `Pages`.
5. Em “Build and deployment”, selecione “Deploy from a branch”.
6. Escolha a branch `main` e a pasta `/root`.
7. Salve.

O GitHub criará um endereço gratuito parecido com:

`https://seuusuario.github.io/nome-do-repositorio/`

## Publicar gratuitamente no Netlify

1. Acesse o Netlify.
2. Crie uma conta.
3. Arraste esta pasta para a área de publicação.
4. O site ficará online automaticamente.

## Observação

As fontes são carregadas gratuitamente pelo Google Fonts. O site funciona em celular, tablet e computador.
