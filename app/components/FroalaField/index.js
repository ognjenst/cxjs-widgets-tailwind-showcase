import { ContentResolver, createFunctionalComponent } from 'cx/ui';

export const Froala = createFunctionalComponent(({ label, value, style, license }) => {
	return (
		<cx>
			<ContentResolver
				onResolve={() =>
					import(/* webpackChunkName: 'froala', webpackPreload: true */ './FroalaField').then(
						(m) => new m.FroalaField({ label, value, style, license })
					)
				}
			/>
		</cx>
	);
});
