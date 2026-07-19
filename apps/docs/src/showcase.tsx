import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@heliannuuthus/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@heliannuuthus/ui/avatar';
import { Button } from '@heliannuuthus/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@heliannuuthus/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@heliannuuthus/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@heliannuuthus/ui/dropdown-menu';
import { Input } from '@heliannuuthus/ui/input';
import { Label } from '@heliannuuthus/ui/label';
import { Separator } from '@heliannuuthus/ui/separator';
import { Spinner } from '@heliannuuthus/ui/spinner';
import { Toaster, toast } from '@heliannuuthus/ui/toast';
import {
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  Copy,
  KeyRound,
  MoreHorizontal,
  Plus,
  ShieldCheck,
  Trash2,
} from 'lucide-react';

const sections = [
  'Index',
  'Buttons',
  'Forms',
  'Cards',
  'Feedback',
  'Overlays',
  'Identity',
];
const componentCatalog = [
  'Accordion',
  'Alert',
  'Alert Dialog',
  'Aspect Ratio',
  'Attachment',
  'Avatar',
  'Badge',
  'Breadcrumb',
  'Bubble',
  'Button',
  'Button Group',
  'Calendar',
  'Card',
  'Carousel',
  'Chart',
  'Checkbox',
  'Collapsible',
  'Combobox',
  'Command',
  'Context Menu',
  'Data Table',
  'Date Picker',
  'Dialog',
  'Direction',
  'Drawer',
  'Dropdown Menu',
  'Empty',
  'Field',
  'Form',
  'Hover Card',
  'Input',
  'Input Group',
  'Input OTP',
  'Item',
  'Kbd',
  'Label',
  'Marker',
  'Menubar',
  'Message',
  'Message Scroller',
  'Native Select',
  'Navigation Menu',
  'Pagination',
  'Popover',
  'Progress',
  'Radio Group',
  'Resizable',
  'Scroll Area',
  'Select',
  'Separator',
  'Sheet',
  'Sidebar',
  'Skeleton',
  'Slider',
  'Sonner',
  'Spinner',
  'Switch',
  'Table',
  'Tabs',
  'Textarea',
  'Toast',
  'Toggle',
  'Toggle Group',
  'Tooltip',
  'Typography',
];

function Section({
  number,
  title,
  note,
  children,
}: {
  number: string;
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section className="specimen" id={title.toLowerCase()}>
      <header className="specimen-heading">
        <span>{number}</span>
        <div>
          <h2>{title}</h2>
          <p>{note}</p>
        </div>
      </header>
      <div className="specimen-stage">{children}</div>
    </section>
  );
}

export function Showcase() {
  const [email, setEmail] = useState('design@heliannuuthus.com');

  return (
    <div className="page-shell">
      <Toaster />
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Heliannuuthus UI 首页">
          <span>H</span> HELIANNUUTHUS / UI
        </a>
        <nav aria-label="组件分类">
          {sections.map((section, index) => (
            <a key={section} href={`#${section.toLowerCase()}`}>
              {String(index + 1).padStart(2, '0')} {section}
            </a>
          ))}
        </nav>
        <a
          className="package-pill"
          href="https://www.npmjs.com/package/@heliannuuthus/ui"
        >
          @heliannuuthus/ui <ArrowRight size={14} />
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">COMPONENT INDEX — ALPHA 0.1</p>
          <h1>
            Interfaces with
            <br />
            <em>good bones.</em>
          </h1>
          <div className="hero-copy">
            <p>
              一套属于 Heliannuuthus 产品的 React
              组件基础设施。清晰、可组合，并对细节保持偏执。
            </p>
            <span>
              {componentCatalog.length} components
              <br />
              Radix primitives
              <br />1 visual language
            </span>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <ShieldCheck />
            <span>
              ACCESSIBLE
              <br />
              BY DEFAULT
            </span>
          </div>
        </section>

        <Section
          number="00"
          title="Index"
          note="The complete Heliannuuthus UI component surface."
        >
          <div className="component-index">
            {componentCatalog.map((component, index) => (
              <div key={component}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{component}</strong>
                <code>
                  @heliannuuthus/ui/{component.toLowerCase().replace(/ /g, '-')}
                </code>
              </div>
            ))}
          </div>
        </Section>

        <Section
          number="01"
          title="Buttons"
          note="Six intentions, four sizes, predictable keyboard behavior."
        >
          <div className="row wrap">
            <Button>
              Primary <ArrowRight />
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">
              <Trash2 /> Delete
            </Button>
            <Button variant="link">Text link</Button>
          </div>
          <Separator />
          <div className="row wrap">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large action</Button>
            <Button size="icon" aria-label="添加">
              <Plus />
            </Button>
            <Button loading>Saving</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Section>

        <Section
          number="02"
          title="Forms"
          note="Inputs should feel calm before they feel clever."
        >
          <div className="form-grid">
            <div className="field">
              <Label htmlFor="email">工作邮箱</Label>
              <Input
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="field">
              <Label htmlFor="key">API Secret</Label>
              <div className="input-icon">
                <KeyRound />
                <Input
                  id="key"
                  type="password"
                  defaultValue="good-components-have-good-bones"
                />
              </div>
            </div>
            <div className="field">
              <Label htmlFor="disabled">不可编辑</Label>
              <Input id="disabled" value="由身份提供商管理" disabled readOnly />
            </div>
          </div>
        </Section>

        <Section
          number="03"
          title="Cards"
          note="Containers for decisions, not decoration."
        >
          <div className="card-grid">
            <Card>
              <CardHeader>
                <span className="card-kicker">SECURITY / 02</span>
                <CardTitle>Passkeys</CardTitle>
                <CardDescription>
                  使用设备生物识别完成更快、更安全的身份验证。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="status-line">
                  <span>
                    <Check /> 已在此设备启用
                  </span>
                  <strong>ACTIVE</strong>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">管理凭证</Button>
              </CardFooter>
            </Card>
            <Card className="dark-card">
              <CardHeader>
                <Bell />
                <CardTitle>Stay informed.</CardTitle>
                <CardDescription>关键账户活动会及时通知你。</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="secondary">
                  设置通知 <ArrowRight />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Section>

        <Section
          number="04"
          title="Feedback"
          note="Useful status without stealing the whole room."
        >
          <div className="feedback-grid">
            <Alert>
              <AlertTitle>Heads up</AlertTitle>
              <AlertDescription>
                你的恢复代码将在 14 天后过期。
              </AlertDescription>
            </Alert>
            <Alert variant="success">
              <AlertTitle>Identity verified</AlertTitle>
              <AlertDescription>当前会话已通过多重验证保护。</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Access revoked</AlertTitle>
              <AlertDescription>
                这枚安全密钥已经无法继续使用。
              </AlertDescription>
            </Alert>
          </div>
          <div className="row wrap">
            <Button
              variant="outline"
              onClick={() => toast.success('资料已保存')}
            >
              Success toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.warning('请检查恢复邮箱')}
            >
              Warning toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.error('无法连接认证服务')}
            >
              Error toast
            </Button>
            <span className="spinner-label">
              <Spinner /> Verifying identity…
            </span>
          </div>
        </Section>

        <Section
          number="05"
          title="Overlays"
          note="Radix-powered focus management and escape behavior."
        >
          <div className="row wrap">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>撤销这枚安全密钥？</DialogTitle>
                  <DialogDescription>
                    撤销后，使用该密钥的设备将无法继续登录。此操作不能自动恢复。
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">取消</Button>
                  </DialogClose>
                  <Button
                    variant="destructive"
                    onClick={() => toast.success('安全密钥已撤销')}
                  >
                    确认撤销
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Account menu <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Copy /> 复制用户 ID
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ShieldCheck /> 安全设置
                </DropdownMenuItem>
                <DropdownMenuItem className="danger-item">
                  <Trash2 /> 删除账户
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" aria-label="更多操作">
              <MoreHorizontal />
            </Button>
          </div>
        </Section>

        <Section
          number="06"
          title="Identity"
          note="Avatars support images, initials, and graceful loading."
        >
          <div className="identity-row">
            <Avatar className="avatar-xl">
              <AvatarImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80"
                alt="示例用户"
              />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>HN</AvatarFallback>
            </Avatar>
            <div>
              <strong>Heliannuuthus member</strong>
              <span>Product administrator</span>
            </div>
            <Separator orientation="vertical" />
            <span className="identity-meta">
              LAST ACTIVE
              <br />
              <strong>JUST NOW</strong>
            </span>
          </div>
        </Section>
      </main>

      <footer>
        <span>HELIANNUUTHUS UI</span>
        <span>Built to be owned, changed, and understood.</span>
        <span>2026 / SHANGHAI</span>
      </footer>
    </div>
  );
}
