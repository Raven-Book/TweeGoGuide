// SugarCube官方文档中写明的Events
// Navigation events allow the execution of JavaScript code at specific points during passage navigation.
// In order of processing: (for reference, this also shows tasks and various special passages)
// 1. Passage init. Happens before the modification of the state history.
// 	1. :passageinit event.
// 2. Passage start. Happens before the rendering of the incoming passage.
// 	1. PassageReady special passage.
// 	2. :passagestart event.
// 	3. PassageHeader special passage.
// 3. Passage render. Happens after the rendering of the incoming passage.
// 	1.PassageFooter special passage.
// 	2. :passagerender event.
// 4. Passage display. Happens after the display—i.e., output—of the incoming passage.
// 	1. PassageDone special passage.
// 	2. :passagedisplay event.
// 5. UI bar special passages update. Happens before the end of passage navigation.
// 	1. StoryBanner special passage.
// 	2. StoryDisplayTitle special passage.
// 	3. StorySubtitle special passage.
// 	4. StoryAuthor special passage.
// 	5. StoryCaption special passage.
// 	6. StoryMenu special passage.
// 6. Passage end. Happens at the end of passage navigation.
// 	1. :passageend event.
//noreturn 部分可以参考 https://www.motoslave.net/sugarcube/2/docs/#guide-tips-arbitrarily-long-return
$(document).on(':passagestart', function (ev) {
    if (!ev.passage.tags.includes('noreturn')) {
		State.variables.return = previous()
	}
});
