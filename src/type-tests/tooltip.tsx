import { Button, Tooltip } from '..';

export const TooltipTypeTest = () => {
  return (
    <>
      <Tooltip
        arrow
        closeDelay={150}
        content="Release details"
        defaultOpen
        openDelay={250}
        placement="topLeft"
      >
        <Button>Hover or focus</Button>
      </Tooltip>

      <Tooltip
        content="Controlled tooltip"
        onOpenChange={(open) => open.valueOf()}
        open
      >
        <Button>Controlled</Button>
      </Tooltip>

      {/* @ts-expect-error The removed trigger prop cannot replace children. */}
      <Tooltip content="Legacy trigger" trigger={<Button>Legacy</Button>} />

      {/* @ts-expect-error Low-level side and align positioning is not public. */}
      <Tooltip align="start" content="Legacy placement" side="top">
        <Button>Legacy placement</Button>
      </Tooltip>

      {/* @ts-expect-error The removed delay prop cannot replace openDelay. */}
      <Tooltip content="Legacy delay" delay={100}>
        <Button>Legacy delay</Button>
      </Tooltip>

      {/* @ts-expect-error Low-level cursor tracking is not public Tooltip API. */}
      <Tooltip content="Tracked" followCursor>
        <Button>Tracked</Button>
      </Tooltip>

      {/* @ts-expect-error Primitive positioning configuration is not public Tooltip API. */}
      <Tooltip content="Positioned" positioning={{ collisionAvoidance: false }}>
        <Button>Positioned</Button>
      </Tooltip>
    </>
  );
};
