function getButtonStyleType(buttonStyle = 'defaultBtn') {
    const dangerBtn = "p-3 m-1 bg-red-400 text-3xl border-slate-950 rounded-lg hover:bg-red-600 transition-all"

    const warningBtn = "p-3 m-1 bg-yellow-400 text-3xl border-slate-950 rounded-lg hover:bg-yellow-600 transition-all"

    const successBtn = "p-3 m-1 bg-green-400 text-3xl border-slate-950 rounded-lg hover:bg-green-600 transition-all"

    const defaultBtn = "p-3 m-1 bg-blue-400 text-3xl border-slate-950 rounded-lg hover:bg-blue-600 transition-all"

    if (buttonStyle === 'dangerBtn') {
        return dangerBtn
    } else if (buttonStyle === 'warningBtn') {
        return warningBtn
    } else if (buttonStyle === 'successBtn') {
        return successBtn
    } else {
        return defaultBtn
    }

}
export default getButtonStyleType