import { component$, QwikMouseEvent, Slot } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

export interface ButtonProps {
  href?: string
  target?: '_blank'
  title?: string
  primary?: boolean
  class?: string
  onClick$?: (
    event: QwikMouseEvent<HTMLButtonElement, MouseEvent>,
    element: Element
  ) => any
}

export const Button = component$((props: ButtonProps) => {
  const classes = [...[props.class?.split(' ') ?? []], 'btn']

  if (props.primary) {
    classes.push('btn-primary')
  }

  const cls = classes.join(' ')

  return (
    <>
      {props.href ? (
        <Link class={cls} title={props.title}>
          <Slot />
        </Link>
      ) : (
        <button class={cls} onClick$={props.onClick$} title={props.title}>
          <Slot />
        </button>
      )}
    </>
  )
})
