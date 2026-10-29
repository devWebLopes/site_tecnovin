# Framer Motion — Animações

## Descrição

Habilidade para criar animações e transições fluidas com Framer Motion 12.

## Competências

- Animações de entrada/saída com `motion` components
- Variants para sequenciamento de animações
- Layout animations com `layout` prop
- Page transitions
- Animações de listas com `AnimatePresence`
- Integração com gestos (hover, tap, drag)

## Convenções

- Animações devem respeitar prefers-reduced-motion
- Usar `motion.div`, `motion.section`, etc.
- Definir variants como objetos separados
- Usar `AnimatePresence` para montagem/desmontagem condicional
- Transições suaves (300-500ms) para UI, mais longos para hero sections

## Regras

- Nunca animar `display` ou `height` diretamente — usar `layout`
- Sempre respeitar `prefers-reduced-motion`
- Performance first: usar `will-change`, `transform`, `opacity`
- Não usar animações que impeçam acessibilidade
