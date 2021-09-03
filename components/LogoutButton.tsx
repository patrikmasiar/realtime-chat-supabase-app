import { FC } from 'react';
import { Button, Icon } from '@supabase/ui';

type Props = {
  onClick(): void;
};

const LogoutButton: FC<Props> = ({ onClick }) => {
  return (
    <Button
      icon={<Icon type="LogOut" src={undefined} />}
      type="outline"
      onClick={onClick}
    >
      Log out
    </Button>
  );
};

export default LogoutButton;
