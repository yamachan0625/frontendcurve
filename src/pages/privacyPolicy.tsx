import React from 'react';
import { NextPage } from 'next';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { MainTemplate } from '~/components/templates/MainTemplate';
import { WithTheme } from '~/components/templates/WithTheme';
import { useProtectRoute } from '~/contexts/auth';
import { useSideBarSelect } from '~/contexts/sideBarSelect';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: '16px',
      padding: '8px 0',
    },
  })
);

const PrivacyPolicy: NextPage = () => {
  useProtectRoute();
  const classes = useStyles();
  const { callSetSelectedIndex } = useSideBarSelect();

  React.useEffect(() => {
    callSetSelectedIndex(null);
  }, []);

  return (
    <WithTheme>
      <MainTemplate>
        <div>
          <div className={classes.mainTitle}>
            利用規約・プライバシーポリシー
          </div>
          <div className={classes.subTitle}>◆はじめに</div>
          アプリ名（以下、当方）は、個人情報の取り扱いにおいて、下記のように定めます。
          <br />
          以下のプライバシーポリシーでは、個人情報の取得・利用・管理について記載しております。
          サービス利用にあたり、個人情報保護方針をお読みになり、ご理解いただけますと幸いです。
          <div className={classes.subTitle}>◆免責事項</div>
          当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          <div className={classes.subTitle}>◆個人情報の取得</div>
          当サービスでは、ユーザーの皆様の個人情報（メールアドレス）を取得させて頂くことがあります。
          <div className={classes.subTitle}>◆個人情報の取得</div>
          個人情報の利用 取得した個人情報は、下記の目的で利用いたします。
          <br />
          (1)本人確認 (2)本アプリの品質向上
          <br />
          第三者への開示・提供の禁止
          <br />
          基本的に個人情報は第三者には提供しませんが、個人情報の保護に関する法律第23条第1項各号により、法令に基づいて提供する場合があります。
          <div className={classes.subTitle}>◆改変と見直しについて</div>
          個人情報については、法令変更などを受けて随時見直しを行います。
        </div>
      </MainTemplate>
    </WithTheme>
  );
};

export default PrivacyPolicy;
