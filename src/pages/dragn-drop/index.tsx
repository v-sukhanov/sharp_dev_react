import { DragDropContext, Droppable, Draggable, OnDragEndResponder, DropResult } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';

export interface IItem {
	id: string,
	content: string
}

const getItems = (count: number) =>
	Array.from({ length: count }, (v, k) => k).map(k => ({
		id: `item-${k}`,
		content: `item ${k}`
	}));

const reorder = (list: IItem[], startIndex: number, endIndex: number) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
	userSelect: "none",
	padding: grid * 2,
	margin: `0 0 ${grid}px 0`,
	background: isDragging ? "lightgreen" : "grey",
	...draggableStyle
});

const grid = 8;

export const DragnDrop = () => {
	const [items, setItems] = useState<IItem[]>([]);

	useEffect(() => {
		setItems(getItems(20));
	}, [])


	const getListStyle = (isDraggingOver: any) => ({
		background: isDraggingOver ? 'lightblue' : 'lightgrey',
		padding: grid,
		width: 250
	});
	const onDragEnd = (result: DropResult) => {
		if (!result.destination) {
			return;
		}

		const newItems = reorder(
			items,
			result.source.index,
			result.destination.index
		);

		setItems(
			newItems
		);
	}
	return <DragDropContext onDragEnd={onDragEnd}>
		<Droppable droppableId="droppable">
			{(provided, snapshot) => (
				<div
					{...provided.droppableProps}
					ref={provided.innerRef}
					style={getListStyle(snapshot.isDraggingOver)}
				>
					{items.map((item, index) => (
						<Draggable key={item.id} draggableId={item.id} index={index}>
							{(provided, snapshot) => (
								<div
									ref={provided.innerRef}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
									style={getItemStyle(
										snapshot.isDragging,
										provided.draggableProps.style
									)}
								>
									{item.content}
								</div>
							)}
						</Draggable>
					))}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	</DragDropContext>
}