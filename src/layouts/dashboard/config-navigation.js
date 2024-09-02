import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      {
        //subheader: 'management',
        items: [
          {
            title: 'Dashboard',
            path: paths.dashboard.group.root,
            icon: ICONS.folder,
            // children: [
            //   { title: 'four', path: paths.dashboard.group.root },
            //   { title: 'five', path: paths.dashboard.group.five },
            //   { title: 'six', path: paths.dashboard.group.six },
            // ],
          },
        ],
      },
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        // subheader: 'overview v5.5.0',
        items: [
          { title: 'Staking', path: paths.dashboard.root, icon: ICONS.banking },
          // { title: 'two', path: paths.dashboard.two, icon: ICONS.ecommerce },
          // {
          //   title: 'three',
          //   path: paths.dashboard.three,
          //   icon: ICONS.analytics,
          // },
        ],
      },
      {
        //subheader: 'management',
        items: [
          {
            title: 'Chat',
            path: paths.dashboard.group.five,
            icon: ICONS.chat,
            // children: [
            //   { title: 'four', path: paths.dashboard.group.root },
            //   { title: 'five', path: paths.dashboard.group.five },
            //   { title: 'six', path: paths.dashboard.group.six },
            // ],
          },
        ],
      },
      {
        //subheader: 'management',
        items: [
          {
            title: 'Social',
            path: paths.dashboard.group.six,
            icon: ICONS.blog,
            // children: [
            //   { title: 'four', path: paths.dashboard.group.root },
            //   { title: 'five', path: paths.dashboard.group.five },
            //   { title: 'six', path: paths.dashboard.group.six },
            // ],
          },
        ],
      },
      {
        //subheader: 'management',
        items: [
          {
            title: 'Docs',
            path: paths.dashboard.two,
            icon: ICONS.file,
            // children: [
            //   { title: 'four', path: paths.dashboard.group.root },
            //   { title: 'five', path: paths.dashboard.group.five },
            //   { title: 'six', path: paths.dashboard.group.six },
            // ],
          },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
       
    ],
    []
  );

  return data;
}
