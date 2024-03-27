import { App as AntApp, ConfigProvider, theme as antTheme } from "antd"
import { AliasToken } from "antd/es/theme/internal"
import { FC, ReactNode } from "react"
import { useShallow } from "zustand/react/shallow"

import { tailwindColors } from ".tailwind/tailwind-colors"
import { tailwindExtend } from ".tailwind/tailwind-extend"
import { useAppSettingsStore } from "@/hooks/stores/use-app-settings-store"
import { Theme } from "@/types/core.type"
import { cn } from "@/utils/classnames"

interface AntProviderProps {
  children: ReactNode
}

interface AntTokenTheme {
  light: Partial<AliasToken>
  dark: Partial<AliasToken>
}

// console.log({ tailwindTheme, tailwindColors })

const mapTailwindColorsToAntColors = <T, K extends object>(colorName: T, color: K) => {
  const colors = Object.keys(color)

  return colors.reduce((prev, cur, index) => {
    if (index > 0 && index < 11) {
      return {
        ...prev,
        [`${colorName}`]: color[500 as keyof typeof color],
        [`${colorName}${index}`]: color[cur as keyof typeof color],
        [`${colorName}-${index}`]: color[cur as keyof typeof color],
      }
    }
    return prev
  }, {})
}

// @ts-ignore
const fontFamily = tailwindExtend?.fontFamily?.sans?.join(", ")

const AntProvider: FC<AntProviderProps> = ({ children }) => {
  const { theme } = useAppSettingsStore(useShallow((state) => ({ theme: state.theme })))

  return (
    <ConfigProvider
      modal={{
        className: cn(""),
        classNames: {
          body: cn(""),
          mask: cn(""),
        },
      }}
      button={{
        className: "",
        classNames: {
          icon: "",
        },
      }}
      theme={{
        token: tokenTheme[theme],
        algorithm: theme === "dark" ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
        components: {
          Input: {
            colorBgContainer: "transparent",
            activeShadow: "none",
            //   activeBorderColor: tailwindColors[theme].primary[500],
          },
          Select: {
            // zIndexBase: 10000,
            // zIndexPopup: 10000,
            // zIndexPopupBase: 10000,
            // lineHeight: 3,
            controlHeight: 46,
            multipleItemBg: tailwindColors.dark.neutral[600],
            optionSelectedBg: tailwindColors.dark.neutral[600],
          },
          InputNumber: {
            colorBgContainer: "transparent",
            activeShadow: "none",
            activeBorderColor: tailwindColors[theme].primary[500],
          },
          Segmented: {
            // itemSelectedBg: theme === "dark" ? tailwindColors.default.slate[600] : "white",
            itemSelectedBg: tailwindColors[theme].primary[500],
            itemSelectedColor: tailwindColors.default.white,
          },
          Button: {
            primaryShadow: "none",
            defaultBg: "transparent",
          },
          Progress: {
            defaultColor: tailwindColors[theme].primary[500],
          },
          Modal: {
            contentBg: tailwindColors[theme].modal,
            headerBg: "transparent",
            titleFontSize: 24,
            titleLineHeight: 2,
            // footerBg: '',
          },
          Tooltip: {
            colorBgSpotlight: tailwindColors[theme].primary[600],
            colorText: tailwindColors[theme].white,
          },
          Popover: {
            colorBgElevated: tailwindColors[theme].component,
            // colorBgContainerDisabled: ''
          },
          Drawer: {
            colorBgElevated: tailwindColors[theme].component,
            // colorBgMask: "",
          },
          Notification: {
            colorBgElevated: tailwindColors[theme].component,
          },
          Table: {
            expandIconBg: tailwindColors[theme].component,
            filterDropdownBg: tailwindColors[theme].component,
            filterDropdownMenuBg: tailwindColors[theme].component,
            headerBg: tailwindColors[theme].component,
            footerBg: tailwindColors[theme].component,
            colorBgContainer: tailwindColors[theme].table,
            rowHoverBg: tailwindColors[theme].component,
            borderColor: tailwindColors[theme].muted,
            // headerBorderRadius: "",
          },
          Cascader: {
            // optionSelectedBg: tailwindColors[theme].primary[500],
            // colorTextHeading: "white",
            // colorTextLabel: "white",
            // colorTextLightSolid: "white",
            // colorBgTextActive: "white",
            // colorText: "white",
          },
        },
      }}
    >
      <AntApp
        style={{ fontSize: "inherit" }}
        notification={{ stack: { threshold: 4 }, placement: "bottomLeft" }}
        message={{}}
      >
        {children}
      </AntApp>
    </ConfigProvider>
  )
}

const defaultTheme = (theme: Theme): Partial<AliasToken> => {
  return {
    // Config font family
    fontFamily,
    // Config background colors
    colorBgBase: tailwindColors[theme].body,
    // colorBgMask: tailwindColors[theme].,
    // colorBgSpotlight: tailwindColors[theme]. ,

    // Config colors
    colorTextBase: tailwindColors[theme].content,
    colorPrimaryText: tailwindColors[theme].emerald[500],
    colorPrimaryHover: tailwindColors[theme].emerald[600],
    colorPrimaryBorder: tailwindColors[theme].emerald[500],
    colorPrimary: tailwindColors[theme].emerald[500],

    colorText: tailwindColors[theme].content,
    colorBgElevated: tailwindColors[theme].component,

    colorInfo: tailwindColors[theme].sky[500],
    colorSuccess: tailwindColors[theme].success[500],
    colorError: tailwindColors[theme].error[500],
    colorWarning: tailwindColors[theme].warning[500],

    colorIcon: tailwindColors[theme].content,
    colorTextLabel: tailwindColors[theme].content,
    colorWhite: tailwindColors[theme].white,

    // Override tailwind colors instead of antd colors
    ...mapTailwindColorsToAntColors("blue", tailwindColors[theme].blue),
    ...mapTailwindColorsToAntColors("cyan", tailwindColors[theme].cyan),
    ...mapTailwindColorsToAntColors("purple", tailwindColors[theme].purple),
    ...mapTailwindColorsToAntColors("green", tailwindColors[theme].green),
    ...mapTailwindColorsToAntColors("yellow", tailwindColors[theme].yellow),
    ...mapTailwindColorsToAntColors("red", tailwindColors[theme].red),
    ...mapTailwindColorsToAntColors("lime", tailwindColors[theme].lime),
    ...mapTailwindColorsToAntColors("gray", tailwindColors[theme].gray),
    ...mapTailwindColorsToAntColors("pink", tailwindColors[theme].pink),
  }
}

const tokenTheme: AntTokenTheme = {
  light: {
    ...defaultTheme("light"),
    colorTextDescription: tailwindColors.light.slate[700],
  },
  dark: {
    ...defaultTheme("dark"),
    colorBgElevated: tailwindColors.dark.component,
    colorFillSecondary: tailwindColors.dark.neutral[800],
    colorTextSecondary: tailwindColors.dark.neutral[500],
    colorSplit: tailwindColors.dark.neutral[600],
    colorTextDescription: tailwindColors.dark.neutral[400],
    colorBgTextHover: tailwindColors.dark.neutral[600],
    colorBgContainer: tailwindColors.dark.neutral[700],
    controlOutline: "none",
    // controlOutline: tailwindColors.dark.neutral[500],
    controlItemBgActiveDisabled: tailwindColors.dark.neutral[700],
    colorTextDisabled: tailwindColors.dark.neutral[600],
    // colorBorder: tailwindColors.dark.neutral[400],
    colorBorder: "none",
    colorTextPlaceholder: tailwindColors.dark.neutral[400],
    colorBgLayout: tailwindColors.dark.neutral[800],

    // colorLinkHover: tailwindColors.dark.slate[700],
  },
}

export default AntProvider

// slate = {
//   50: "#f8fafc",
//   100: "#f1f5f9",
//   200: "#e2e8f0",
//   300: "#cbd5e1",
//   400: "#94a3b8",
//   500: "#64748b",
//   600: "#475569",
//   700: "#334155",
//   800: "#1e293b",
//   900: "#0f172a",
//   950: "#020617"
// }
