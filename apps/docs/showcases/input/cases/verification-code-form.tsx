import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Input } from '@heliannuuthus/ui';
import { Mail } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const InputOtpVerificationDemo = ({
    variant = 'connected',
  }: {
    variant?: 'connected' | 'separated';
  }) => {
    const [value, setValue] = useState('');

    return (
      <div className="data-otp-card">
        <div className="data-icon-badge">
          <Mail />
        </div>
        <strong>{copy('验证你的邮箱')}</strong>
        <p>{copy('验证码已发送至 he***@example.com')}</p>
        <div className="data-otp-variants">
          <div className="data-otp-variant-row">
            <span>
              <strong>
                {variant === 'connected' ? copy('连接方块') : copy('独立方块')}
              </strong>
              <small>
                {variant === 'connected'
                  ? copy('适合分段验证码或序列号')
                  : copy('适合强调每一位输入状态')}
              </small>
            </span>
            <Input.OTP
              maxLength={6}
              value={value}
              onChange={setValue}
              variant={variant}
              aria-label={
                variant === 'connected'
                  ? copy('连接方块验证码')
                  : copy('独立方块验证码')
              }
            />
          </div>
        </div>
        <span>
          {value.length === 6
            ? copy('验证码已填写完整')
            : copy(`还需输入 ${6 - value.length} 位`)}
        </span>
      </div>
    );
  };

  return InputOtpVerificationDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function InputCase04({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-input">
      <Example />
    </div>
  );
}
