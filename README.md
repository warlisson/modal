# Classe Modal

Essa classe é responsável por exibir as modais para o usuário.

## HTML modal

```
<div class="fixed top-0 left-0 z-50 flex items-center justify-center invisible w-full h-full transition-all bg-black opacity-0 bg-opacity-20 modal" id="modal">
  <div class="w-full max-w-md overflow-hidden transition-all transform scale-75 bg-white rounded-lg opacity-60 modal-container">
    <div class="p-5 text-lg text-white bg-red-600 modal-header">
      Tem certeza?
    </div><!-- modal-header -->
    <div class="px-5 py-8 modal-body">
      Desenha realmente deletar esse artigo?
    </div><!-- modal-body -->
    <div
      class="flex items-center justify-center p-3 space-x-2 bg-gray-100 border-t border-gray-200 modal-footer">
      <span class="inline-block px-5 py-2 text-white bg-red-500 rounded cursor-pointer">Deletar</span>
      <span
        class="inline-block px-5 py-2 text-white bg-gray-600 rounded cursor-pointer close-modal">Cancelar</span>
    </div><!-- modal-footer -->
  </div><!-- modal-container -->
</div>
```

## Javascript:

```
(new Modal).init();
```

## Configurações:

```
(new Modal({
  modal = '.modal';
  openClass = '.open-modal';
  closeClass = '.close-modal';
})).init();
```
