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

      <Tooltip
        align="start"
        content="Legacy placement props remain compatible"
        side="top"
        trigger={<Button>Legacy trigger</Button>}
      />

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
